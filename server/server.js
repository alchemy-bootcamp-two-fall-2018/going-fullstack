//const app = require('./lib/app');
const express = require('express');
const app = express();
const morgan = require('morgan');
const pg = require('pg');

app.use(morgan('dev'));
app.use(express.json());

const Client = pg.Client;
const dbUrl = 'postgres://postgres:1234@localhost:5432/organizations';
const client = new Client(dbUrl);
client.connect();

app.get('/api/nonprofits', (req, res) => {

  client.query(`
    SELECT id, name FROM nonprofits;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/nonprofits/:id', (req, res) => {
  client.query(`
    SELECT * FROM nonprofits WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/nonprofits', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO nonprofits (name, city, description, employees, metropol, category)
    VALUES($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `,
  [body.name, body.city, body.description, body.employees, body.metropol, body.category])
    .then(result => {
      res.json(result.rows[0]);
    });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});