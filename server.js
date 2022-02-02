// web framework for node.js
const express = require('express');
// Create a session middleware with the given options
const session = require('express-session');
// Handlebars view engines for Express
const handlebar = require('express-handlebars');
// Middelware for node.js
// to implement authentication and authorization
const passport = require('passport');
// local authentication strategy authenticates users using a username and password
// The strategy requires a verify callback, which accepts these credentials and calls done providing a user.
const localStategy = require('passport-local').Strategy;
// for hashing password for saving in db
const bcrypt = require('bcrypt');
// init Application
const app = express();

// Middleware
app.engine('hbs', handlebar({ extname: '.hbs'}));
app.set('view engine', 'hbs');
// creating public dir
app.use(express.static(path.join(__dirname+ '/public')));
app.use(session({
    secret: 'env.secret2022',
    resave: false,
    saveUninitialized: true
}));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Passport.js
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    // user modul setup
});