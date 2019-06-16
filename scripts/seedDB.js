const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Students collection and inserts the student below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/campsite"
);


const studentSeed = [
  {
    name: "TestName",
    urlImage:"TestImageUrl",
    urlGithub: "TestgithubURL",
    description:
      "TestDescription",
    date: new Date(Date.now())
  }
];

db.Student
  .remove({})
  .then(() => db.Student.collection.insertMany(studentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
