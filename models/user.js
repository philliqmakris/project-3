const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    GoogleID: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: String,
    emailAddress: String,
    photo: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;
