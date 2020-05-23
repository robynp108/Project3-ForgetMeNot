let mongoose = require("mongoose");
let db = require("../models");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://user1:password1@ds115595.mlab.com:15595/heroku_tsxmp9w7"
mongoose.connect(MONGODB_URI);

let concernSeed = [
    {
        name: "Oven off",
        last_check: "never"
    },
    {
        name: "Pantry closed",
        last_check: "never"
    },
    {
        name: "Front door locked",
        last_check: "never"
    }
];

mongoose.connection.dropCollection("concerns")
  .then(() => db.Concern.collection.insertMany(concernSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });