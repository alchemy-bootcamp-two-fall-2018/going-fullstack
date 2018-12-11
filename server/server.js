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

app.get('/api/hero', (req, res) => {
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

app.get('/api/hero/:id', (req, res) => {
  client.query(`
    SELECT * FROM hero WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/hero', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO hero (name, age, ability)
    VALUES($1, $2, $3)
    RETURNING *;
  `,
  [body.name, body.age, body.ability])
    .then(result => {
      const id = result.rows[0].id;

      return client.query(`
        SELECT
          hero.id,
          hero.name as name,
          hero.age as age, 
          hero.ability as ability
        FROM hero
        WHERE hero.id = $1;
      `,
      [id]);
    })
    .then(result => {
      res.json(result.rows[0]);
    });
});
  
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});