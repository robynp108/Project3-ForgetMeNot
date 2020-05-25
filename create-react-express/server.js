const express = require("express");
// const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://user1:password1@ds115595.mlab.com:15595/heroku_tsxmp9w7"
mongoose.connect(MONGODB_URI);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
app.get("/concerns", (req, res) => {
  db.Concern.find({}, (error, data) => {
      if (error) {
          res.send(error);
      } else {
          res.json(data);
      }
  });
});

app.put("/concerns/:id", (req, res) => {
  db.Concern.findByIdAndUpdate(req.params.id, {$set: {last_check: req.body.last_check}});
  res.send(req.body.last_check);
});

// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
