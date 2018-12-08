const express = require('express');
const app = express();
const morgan = require('morgan');
const animals = require('./routes/animals');
const size = require('./routes/sizes');

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/sizes', size);
app.use('/api/animals', animals);

module.exports = app;

