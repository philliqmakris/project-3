const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Students collection and inserts the student below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/campsite"
);


const studentSeed = [
  {
    name: "Arunav Gupta",
    urlImage:"https://picsum.photos/200",
    urlGithub: "https://github.com/arunav1101",
    urlLinkedIn:"https://www.linkedin.com/in/guptaarunav/",
    batchId:'OREPOR201901FSF3',
    description:
      "Certified Scrum Master, QA Consultant at Nike, TOSCA Specialist, Certified AWS Developer Associate.",
    date: new Date(Date.now())
  },
  {
    name: "Nash",
    urlImage:"https://picsum.photos/200",
    urlGithub: "https://github.com/arunav1101",
    batchId:'OREPOR201901FSF3',
    description:
      "I am ANash",
    date: new Date(Date.now())
  },
  {
    name: "Phil",
    urlImage:"https://picsum.photos/200",
    urlGithub: "https://github.com/arunav1101",
    batchId:'OREPOR201901FSF3',
    description:
      "I am Phil",
    date: new Date(Date.now())
  },
  {
    name: "Todd",
    urlImage:"https://picsum.photos/200",
    urlGithub: "https://github.com/arunav1101",
    batchId:'OREPOR201901FSF3',
    description:
      "I am Todd",
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
