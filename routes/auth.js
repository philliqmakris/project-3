
const express = require('express');
const route = express.Router();
const passport = require('passport');

const serverHost = process.env.serverHost || "http://localhost:";
const PORT = process.env.PORT || 3000;
const testHost = process.env.serverHost || "http://localhost:3000"

console.log(serverHost);
console.log(PORT);

route.get(
	'/google',
	passport.authenticate('google', {
		scope: [ 'profile', 'email' ]
	})
);
route.get(
	'/google/redirect',
	passport.authenticate('google', {
		//failureRedirect: "http://localhost:3000"
		//failureRedirect: serverHost+PORT
		failureRedirect: testHost
	}),
	function(req, resp) {
		//resp.redirect("http://localhost:3000/Profiles/"+ req.user.GoogleID);
		//resp.redirect(serverHost+PORT+"/Profiles/"+ req.user.GoogleID);
		resp.redirect(testHost+"/Profiles/"+ req.user.GoogleID);
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
	res.redirect("http://localhost:3000");
});

module.exports = route;