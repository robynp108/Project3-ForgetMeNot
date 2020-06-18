const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;

const { generateJwt, authenticateUser, authenticateJwt } = require("./auth");
const db = require("./models");
const ObjectId = require('mongodb').ObjectId;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/concern", { useNewUrlParser: true });

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.post("/signup", ({ body }, res) => {
  db.User.create(body)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/api/login", async ({ body }, res) => {
  try {
    const { username, password } = body;
    const user = await db.User.findOne({ username });
    authenticateUser(user, password);
    const jwt = generateJwt(user._id) ? generateJwt(user._id) : "it didn't work";
    res.json({ jwt });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

app.get("/user", async (req, res) => {
  try {
    const user = await authenticateJwt(req);
    res.json(user);
  } catch (e) {
    console.log(e);
    res.send(e, 403)
  }
});

app.get("/concerns", async (req, res) => {
  try {
    const user = await authenticateJwt(req);
    db.Concern.find({user_id: user._id}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  } catch (e) {
    console.log(e);
    res.send(e, 403)
    return;
  }
});

app.put("/concerns/:id", async (req, res) => {
  try {
    const user = await authenticateJwt(req);
  } catch (e) {
    console.log(e);
    res.send(e, 403)
    return;
  }

  db.Concern.findById(req.params.id, async (error, data) => {
    if (error) {
      res.send(error);
    } else {
      data.last_check = req.body.last_check;
      await data.save();
      res.json(data);
    }
  });
});

app.post("/concerns", async (req, res) => {
  try {
    const user = await authenticateJwt(req);
    db.Concern.collection.insert({ name: req.body.name, user_id: user.get("id") }, (error, data) => {
      console.log(req.body);
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  } catch (e) {
    console.log(e);
    res.send(e, 403)
    return;
  }
});

app.delete("/concerns/:id", async (req, res) => {
  try {
    const user = await authenticateJwt(req);
    db.Concern.collection.deleteOne({ _id: ObjectId(req.params.id), user_id: user.get("id") }, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  } catch (e) {
    console.log(e);
    res.send(e, 403)
    return;
  }
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
