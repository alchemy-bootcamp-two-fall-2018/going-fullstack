const express = require('express');
const app = express();
const morgan = require('morgan');
const books = require('./routes/books');
const genres = require('./routes/genres');

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/genres', genres);
app.use('/api/books', books);

module.exports = app;