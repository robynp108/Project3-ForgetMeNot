const express = require("express");
const session = require("express-session");
// const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const passport = require("./middleware/passport");
const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: "abc" }));
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://user1:password1@ds115595.mlab.com:15595/heroku_tsxmp9w7"
// mongoose.connect(MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/concern", { useNewUrlParser: true });

// Serve up static assets (usually on heroku)
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

app.post("/api/login", passport.authenticate("local"), ({ user }, res) => {
  res.json(user);
});

app.get("/user", (req, res) => {
  if (!req.user) {
    res.send("forbidden", 403);
    return;
  }
    res.json(req.user);
});

// Send every request to the React app
app.get("/concerns", (req, res) => {
  if (!req.user) {
    res.send("forbidden", 403);
    return;
  }
  db.Concern.find({user_id: req.user._id}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

app.put("/concerns/:id", (req, res) => {
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

app.post("/concerns", (req, res) => {
  db.Concern.collection.insert({ name: req.body.name, user_id: req.user._id }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
