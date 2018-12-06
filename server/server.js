const express = require('express');
const app = express();
const morgan = require('morgan');
const pg = require('pg');

app.use(morgan('dev'));
app.use(express.json());

const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/superheroes';
const client = new Client(dbUrl);
client.connect();

app.get('/api/superheroes', (req, res) => {
  client.query(`
    SELECT id, name FROM hero;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/superheroes/:id', (req, res) => {
  client.query(`
    SELECT * FROM hero WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/superheroes', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO hero (name, age, track)
    VALUES($1, $2, $3)
    RETURNING id, name, age;
  `,
  [body.name, body.age, body.track])
    .then(result => {
      res.json(result.rows[0]);
    });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});