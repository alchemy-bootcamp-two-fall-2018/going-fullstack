const express = require('express');
const app = express();
const morgan = require('morgan');
const singers = require('./routes/singers');
const genres = require('./routes/genres');

// enhanced logging
app.use(morgan('dev'));

// register the json "middleware" body parser
app.use(express.json());

// register our routes
app.use('/api/genres', genres);
app.use('/api/singers', singers);

module.exports = app;