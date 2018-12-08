const express = require('express');
const app = express();
const morgan = require('morgan');
const islands = require('./routes/islands');
const rating = require('./routes/ratings');

app.use(morgan('dev'));

app.use(express.json());

app.use('/api/ratings', ratings);
app.use('api/islands', islands);

module.exports = app;