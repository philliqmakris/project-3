const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  urlGithub: String,
  urlLinkedIn:String,
  urlImage: String,
  date: { type: Date, default: Date.now }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
