const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    GoogleID: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: String,
    emailAddress: String,
    photo: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;



/*
GoogleID: profile.id,
					firstName: profile.name.givenName,
					lastName: profile.name.familyName,
					emailAddress: profile.emails[0].value,
					photo: profile.photos[0].value
*/