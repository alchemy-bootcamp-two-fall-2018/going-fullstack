const express = require('express');
const app = express();
const pg = require('pg');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());

const Client = pg.Client;
const dbUrl = 'postgres://postgres:1234@localhost:5432/nonprofits';
const client = new Client(dbUrl);
client.connect();


app.get('/api/nonprofits', (req, res) => {
  client.query(`
    SELECT id, name, category, city, description, employees, metropolitan FROM organizations;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/nonprofits:id', (req, res) => {
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
    INSERT INTO nonprofits (name, category, city, description, employees, metropolitan)
    VALUES($1, $2, $3, $4, $5)
    RETURNING id, name, category, city, description, employees, metropolitan;
  `,
  [body.name, body.category, body.city, body.description, body.employees, body.metropolitan])
    .then(result => {
      res.json(result.rows[0]);
    });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on the port', PORT);
});