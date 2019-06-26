const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Students collection and inserts the student below

mongoose.connect(
 process.env.MONGODB_URI ||
 "mongodb://localhost/campsite"
);


const studentSeed = [
<<<<<<< HEAD
  {
    name: "Arunav Gupta",
    urlImage:"https://avatars3.githubusercontent.com/u/24398706?s=460&v=4",
    urlGithub: "https://github.com/arunav1101",
    urlLinkedIn:"https://www.linkedin.com/in/guptaarunav/",
    batchId:'OREPOR201901FSF3',
    description:
      "Certified Scrum Master, QA Consultant at Nike, TOSCA Specialist, Certified AWS Developer Associate.",
    date: new Date(Date.now())
  },
  {
    name: "Nash McDonald",
    urlImage:"https://avatars2.githubusercontent.com/u/20845201?s=460&v=4",
    urlGithub: "https://github.com/nashbrowns",
    batchId:'OREPOR201901FSF3',
    description:
      "I am Nash",
    date: new Date(Date.now())
  },
  {
    name: "Phillip Makris",
    urlImage:"https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/43509330_1713177855472231_1722977528664031232_n.jpg?_nc_cat=109&_nc_oc=AQku6HI9mHZ1YB3ZTt_lTAaLB1GIN6QUN_ywClzk8gTzuOYnVFroMnEyWV0rx2tpY9Y&_nc_ht=scontent-lax3-1.xx&oh=2cdf7759afb9f08b559c65d12e54a504&oe=5D7BDF74",
    urlGithub: "https://github.com/philliqmakris",
    batchId:'OREPOR201901FSF3',
    description:
      "I am Phil",
    date: new Date(Date.now())
  },
  // {
  //   name: "Todd Behunin",
  //   urlImage:"https://avatars0.githubusercontent.com/u/796147?s=460&v=4",
  //   urlGithub: "https://github.com/tbehunin",
  //   batchId:'OREPOR201901FSF3',
  //   description:
  //     "I am your instructor",
  //   date: new Date(Date.now())
  // },

  {
    name: "Travis Williamson",
    urlImage:"https://avatars0.githubusercontent.com/u/45703142?s=460&v=4",
    urlGithub: "https://github.com/TravisWadeWilliamson",
    batchId:'OREPOR201901FSF3',
    description:
      "An old guy trying to re-invent himself as a cooler, younger one vis-à-vis coding.",
    date: new Date(Date.now())
  },

  {
    name: "Ryan Carmody",
    urlImage:"https://avatars1.githubusercontent.com/u/43544203?s=460&v=4",
    urlGithub: "https://github.com/rlcarmody",
    batchId:'OREPOR201901FSF3',
    description:
      "I am Ryan",
    date: new Date(Date.now())
  },

  {
    name: "Robert J. Paruch",
    urlImage:"https://avatars1.githubusercontent.com/u/44997807?s=460&v=4",
    urlGithub: "https://github.com/robjpar",
    batchId:'OREPOR201901FSF3',
    description:
      "I am Robert",
    date: new Date(Date.now())
  },

  {
    name: "Jean-Paul Deshaies",
    urlImage:"https://avatars1.githubusercontent.com/u/28058841?s=460&v=4",
    urlGithub: "https://github.com/jdeshaies1982",
    batchId:'OREPOR201901FSF3',
    description:
      "I am Jean",
    date: new Date(Date.now())
  },

  {
    name: "David LiaBraaten ",
    urlImage:"https://avatars3.githubusercontent.com/u/46392401?s=460&v=4",
    urlGithub: "https://github.com/verbash",
    batchId:'OREPOR201901FSF3',
    description:
      " I am David",
    date: new Date(Date.now())
  },

  {
    name: "Hoang Le",
    urlImage:"https://avatars1.githubusercontent.com/u/38028938?s=460&v=4",
    urlGithub: "https://github.com/hoangle4",
    batchId:'OREPOR201901FSF3',
    description:
      "I am Hoang",
    date: new Date(Date.now())
  },

  {
    name: "Patrick Gonzalez",
    urlImage:"https://avatars0.githubusercontent.com/u/46695956?s=460&v=4",
    urlGithub: "https://github.com/pgonzalez003",
    batchId:'OREPOR201901FSF3',
    description:
      "I am Patrick",
    date: new Date(Date.now())
  },

  // {
  //   name: "Bo Carlson",
  //   urlImage:"https://avatars1.githubusercontent.com/u/521958?s=460&v=4",
  //   urlGithub: "https://github.com/bocarlson",
  //   batchId:'OREPOR201901FSF3',
  //   description:
  //     "I am your TA",
  //   date: new Date(Date.now())
  // },


  {
    name: "Tyler Jeffe",
    urlImage:"https://avatars1.githubusercontent.com/u/45647344?s=460&v=4",
    urlGithub: "https://github.com/tylerjeffe",
    batchId:'OREPOR201901FSF3',
    description:
      "",
    date: new Date(Date.now())
  },

  

  

=======
 {
   name: "Arunav Gupta",
   urlImage:"https://avatars3.githubusercontent.com/u/24398706?s=460&v=4",
   urlGithub: "https://github.com/arunav1101",
   urlLinkedIn:"https://www.linkedin.com/in/guptaarunav/",
   batchId:'OREPOR201901FSF3',
   description:
     "Certified Scrum Master, QA Consultant at Nike, TOSCA Specialist, Certified AWS Developer Associate.",
   date: new Date(Date.now())
 },
 {
   name: "Nash McDonald",
   urlImage:"https://avatars2.githubusercontent.com/u/20845201?s=460&v=4",
   urlGithub: "https://github.com/nashbrowns",
   batchId:'OREPOR201901FSF3',
   description:
     "I am Nash",
   date: new Date(Date.now())
 },
 {
   name: "Phillip Makris",
   urlImage:"https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/43509330_1713177855472231_1722977528664031232_n.jpg?_nc_cat=109&_nc_oc=AQku6HI9mHZ1YB3ZTt_lTAaLB1GIN6QUN_ywClzk8gTzuOYnVFroMnEyWV0rx2tpY9Y&_nc_ht=scontent-lax3-1.xx&oh=2cdf7759afb9f08b559c65d12e54a504&oe=5D7BDF74",
   urlGithub: "https://github.com/philliqmakris",
   batchId:'OREPOR201901FSF3',
   description:
     "I am Phil",
   date: new Date(Date.now())
 },
 {
   name: "Todd Behunin",
   urlImage:"https://avatars0.githubusercontent.com/u/796147?s=460&v=4",
   urlGithub: "https://github.com/tbehunin",
   batchId:'OREPOR201901FSF3',
   description:
     "I am your instructor",
   date: new Date(Date.now())
 },

 {
   name: "Travis Williamson",
   urlImage:"https://avatars0.githubusercontent.com/u/45703142?s=460&v=4",
   urlGithub: "https://github.com/TravisWadeWilliamson",
   batchId:'OREPOR201901FSF3',
   description:
     "An old guy trying to re-invent himself as a cooler, younger one vis-à-vis coding.",
   date: new Date(Date.now())
 },

 {
   name: "Ryan Carmody",
   urlImage:"https://avatars1.githubusercontent.com/u/43544203?s=460&v=4",
   urlGithub: "https://github.com/rlcarmody",
   batchId:'OREPOR201901FSF3',
   description:
     "I am Ryan",
   date: new Date(Date.now())
 },

 {
   name: "Robert J. Paruch",
   urlImage:"https://avatars1.githubusercontent.com/u/44997807?s=460&v=4",
   urlGithub: "https://github.com/robjpar",
   batchId:'OREPOR201901FSF3',
   description:
     "I am Robert",
   date: new Date(Date.now())
 },

 {
   name: "Jean-Paul Deshaies",
   urlImage:"https://avatars1.githubusercontent.com/u/28058841?s=460&v=4",
   urlGithub: "https://github.com/jdeshaies1982",
   batchId:'OREPOR201901FSF3',
   description:
     "I am Jean",
   date: new Date(Date.now())
 },

 {
   name: "David LiaBraaten ",
   urlImage:"https://avatars3.githubusercontent.com/u/46392401?s=460&v=4",
   urlGithub: "https://github.com/verbash",
   batchId:'OREPOR201901FSF3',
   description:
     " I am David",
   date: new Date(Date.now())
 },

 {
   name: "Hoang Le",
   urlImage:"https://avatars1.githubusercontent.com/u/38028938?s=460&v=4",
   urlGithub: "https://github.com/hoangle4",
   batchId:'OREPOR201901FSF3',
   description:
     "I am Hoang",
   date: new Date(Date.now())
 },

 {
   name: "Patrick Gonzalez",
   urlImage:"https://avatars0.githubusercontent.com/u/46695956?s=460&v=4",
   urlGithub: "https://github.com/pgonzalez003",
   batchId:'OREPOR201901FSF3',
   description:
     "I am Patrick",
   date: new Date(Date.now())
 },

 {
   name: "Bo Carlson",
   urlImage:"https://avatars1.githubusercontent.com/u/521958?s=460&v=4",
   urlGithub: "https://github.com/bocarlson",
   batchId:'OREPOR201901FSF3',
   description:
     "I am your TA",
   date: new Date(Date.now())
 },


 {
   name: "Tyler Jeffe", 
   urlImage:"https://avatars1.githubusercontent.com/u/45647344?s=460&v=4",
   urlGithub: "https://github.com/tylerjeffe",
   batchId:'OREPOR201901FSF3',
   description:
     "",
   date: new Date(Date.now())
 },
>>>>>>> master
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