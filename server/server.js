const express = require('express');
const app = express();
const morgan = require('morgan');
const client = require('./db-client');

app.use(morgan('dev'));
app.use(express.json());

// const Client = pg.Client;
// const dbUrl = 'postgres://localhost:5432/superheroes';
// const client = new Client(dbUrl);
// client.connect();

app.get('/api/superheroes', (req, res) => {
  client.query(`
    SELECT 
      hero.id, 
      hero.name,
      hero.age,
      hero.ability
    FROM hero
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
    INSERT INTO hero (name, age, ability)
    VALUES($1, $2, $3)
    RETURNING *;
  `,
  [body.name, body.age, body.ability])
    .then(result => {
      res.json(result.rows[0]);
    });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});