const express = require('express');
const route = express.Router();
const passport = require('passport');
const config = require("../config/config");


route.get(
	'/google',
	passport.authenticate('google', {
		scope: [ 'profile', 'email' ]
	})
);
route.get(
	'/google/redirect',
	passport.authenticate('google', {
		failureRedirect: process.env.REACT_APP_API_URL
	}),
	function(req, resp) {
		resp.redirect(process.env.REACT_APP_API_URL + "/Profiles/"+ req.user.GoogleID);
	}
);

route.get('/verify', (req, res) => {
	if (req.user) {
		console.log(req.user);
	} else {
		console.log('not auth');
	}
});

route.get('/logout', (req, res) => {
	console.log("req",req);
	req.logout();
	res.redirect(process.env.REACT_APP_API_URL);
});

module.exports = route;