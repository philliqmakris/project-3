const express = require('express');
const route = express.Router();
const passport = require('passport');
const config = require("../config/config")


route.get(
	'/google',
	passport.authenticate('google', {
		scope: [ 'profile', 'email' ]
	})
);
route.get(
	'/google/redirect',
	passport.authenticate('google', {
		failureRedirect: config.clientHost
	}),
	function(req, resp) {
		resp.redirect(config.clientHost + "/Profiles/"+ req.user.GoogleID);
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
	req.logout();
	res.redirect(config.clientHost);
});

module.exports = route;