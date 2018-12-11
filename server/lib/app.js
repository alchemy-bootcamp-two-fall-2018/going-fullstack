const express = require('express');
const app = express();
const morgan = require('morgan');
const campgrounds = require('./routes/campgrounds');
const forests = require('./routes/forests');


app.use(morgan('dev'));
app.use(express.json());

app.use('/api/forests', forests);
app.use('/api/campgrounds', campgrounds);

module.exports = app;
