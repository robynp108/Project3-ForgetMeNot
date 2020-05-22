let mongoose = require("mongoose");
let db = require("../models");

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://WorkoutTrackerUser:WorkoutTrackerPW1@ds235840.mlab.com:35840/heroku_6ml9v6vw"
// mongoose.connect(MONGODB_URI);

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