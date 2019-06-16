const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/campsite"
);

/*
name: { type: String, required: true },
  description: { type: String, required: true },
  urlGithub: String,
  urlImage: String,
  date: 
*/

const userSeed = [
  {
    GoogleID: "The Dead Zone",
    firstName:"hello",
    lastName: "Stephen King",
    emailAddress:
      "A number-one national",
      photo: "test"
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
