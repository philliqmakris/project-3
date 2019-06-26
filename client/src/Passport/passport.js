const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require('../../../models');


module.exports = (passport)=> {
	passport.use(
		new GoogleStrategy(
			{
				clientID: '482727391855-04n13323h8p6locjp7tm6572mvcucrsc.apps.googleusercontent.com',
				clientSecret: '-DUcarD1H1BtmyPX3VehT4e5',
				callbackURL: '/auth/google/redirect'
			},
			(accessToken, refreshToken, profile, done) =>{
                const newUser = {
					GoogleID: profile.id,
					firstName: profile.name.givenName,
					lastName: profile.name.familyName,
					emailAddress: profile.emails[0].value,
					photo: profile.photos[0].value
				};
				
				db.User
					.find({ GoogleID:{$eq: newUser.GoogleID}
					})
					.then((user) => {
						if (user[0]) done(null, newUser);
						else db.User.create(newUser).then((user) =>done(null, user));
					})
					.catch((err) => console.log(err));
				}
		)
	);

	passport.serializeUser((user, done) => {
		done(null, user);
	});
	passport.deserializeUser((user, done) => {
		done(null, user);
	});
};