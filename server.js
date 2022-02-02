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

