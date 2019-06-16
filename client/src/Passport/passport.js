const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require('../../../models/user');


module.exports = (passport)=> {
	passport.use(
		new GoogleStrategy(
			{
				clientID: '225323937090-m7djk4fllth4v7g0su4p77mrab6cj2ht.apps.googleusercontent.com',
				clientSecret: 'u6n9kYJHuphxfmjCX2Rql6Vh',
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
				
				db
					.find({ GoogleID:{$eq: newUser.GoogleID}
					})
					.then((user) => {
						if (user[0]) done(null, newUser);
						else db.create(newUser).then((user) =>done(null, user));
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