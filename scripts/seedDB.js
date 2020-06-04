let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/concern", { useNewUrlParser: true });

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