const express = require('express');
const app = express();
const morgan = require('morgan');
// const client = require('./db-client');
const synths = require('./lib/routes/synths');
const manufacturers = require('./lib/routes/manufacturers');

app.use(morgan('dev'));

app.use(express.json());

app.use('/api/manufacturers', manufacturers);

app.use('/api/synths', synths);



const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});