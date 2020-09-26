const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const session = require("express-session");
const morgan = require('morgan');
require('dotenv').config();
var app = express();

// view engine setup
app.set('views', path.join('./views/'));
app.set('view engine', 'twig');

// midleware
app.use(morgan(process.env.NODE_ENV));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, './public')));
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))



/* -------------------------------------------------------------------------- */
/* ----------------------- REQUIRE CONTROLLER / ROUTES ---------------------- */
app.use('/', require('./routes/index'));
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */



// catch 404 et transférer vers le gestionnaire d'erreurs
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  // fourni les erreurs uniquement en development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};
  // Rendu de la page d'erreur
  res.status(err.status || 500);
  res.render('error', {
    title: 'Erreur',
  });
});


module.exports = app;