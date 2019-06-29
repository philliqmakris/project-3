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
		failureRedirect: config.serverHost
	}),
	function(req, resp) {
		resp.redirect(config.serverHost + "/Profiles/"+ req.user.GoogleID);
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
	res.redirect(config.serverHost);
});

module.exports = route;