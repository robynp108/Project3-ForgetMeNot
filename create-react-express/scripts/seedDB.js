let mongoose = require("mongoose");
let db = require("../models");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://user1:password1@ds115595.mlab.com:15595/heroku_tsxmp9w7"
mongoose.connect(MONGODB_URI);

let ForgetMeNotSeed = [
    {
        items: {
            name: "Oven off",
            last_check: new Date().setDate(new Date().getDate())
        }
    },
    {
        items: {
            name: "Pantry closed",
            last_check: new Date().setDate(new Date().getDate())
        }
    },
    {
        items: {
            name: "Front door locked",
            last_check: new Date().setDate(new Date().getDate())
        }
    },
];

mongoose.connection.dropCollection("items")
  .then(() => db.ForgetMeNot.collection.insertMany(ForgetMeNotSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });