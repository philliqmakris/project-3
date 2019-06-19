
// const Config = require('../config/config');
const express = require('express');
const route = express.Router();
const passport = require('passport');

// console.log('Config',Config)

route.get(
	'/google',
	passport.authenticate('google', {
		scope: [ 'profile', 'email' ]
	})
);
route.get(
	'/google/redirect',
	passport.authenticate('google', {
		failureRedirect: "http://localhost:3000"
	}),
	function(req, resp) {
		console.log(req.user);
		resp.redirect("http://localhost:3000/Profiles");
	}
);

route.get('/verify', (req, res) => {

	console.log('verify',req)
	if (req.user) {
		console.log(req.user);
	} else {
		console.log('not auth');
	}
});

route.get('/logout', (req, res) => {
	req.logout();
	res.redirect("http://localhost:3000");
});

module.exports = route;