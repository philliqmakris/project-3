const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("passport");

const app = express();
const PORT = process.env.PORT || 3001;

//console.log("process.env:"+JSON.stringify(process.env.PORT));


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Socket.io ----------------------------------------------
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (client) => {
  console.log('user connected');

  client.on('disconnect', function(){
    console.log('user disconnected');
  });

  client.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

});

//Passport Strategy
require("./client/src/Passport/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);
// //Declare Global Variables
app.use((req, resp, next) => {
  resp.locals.user = req.user || null;
  next();
});

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/campsite",{ useNewUrlParser: true }) ;


// Start the API server
http.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
