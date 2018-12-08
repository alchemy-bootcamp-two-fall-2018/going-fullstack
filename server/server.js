const express = require('express');
const app = express();
const morgan = require('morgan');
const client = require('./scripts/db-client');

app.use(morgan('dev'));
app.use(express.json());

app.get('/api/characters', (req, res) => {
  client.query(`
    SELECT 
      characters.id,
      characters.name,
      houses.id as "housesId",
      houses.name as house,
      characters.alive,
      characters.age
    FROM characters 
    JOIN houses 
    ON characters.houses_id = houses.id`)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/houses', (req, res) => {
  client.query(`
    SELECT id, name 
    FROM houses;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/characters/:id', (req, res) => {
  client.query(`
    SELECT 
      characters.id,
      characters.name,
      houses.id as "housesId",
      houses.name as house,
      characters.alive,
      characters.age
    FROM characters 
    JOIN houses 
    ON characters.houses_id = houses.id
    WHERE characters.id = $1
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/characters', (req, res) => {
  const body = req.body; 
  client.query(`
    INSERT INTO characters(name, houses_id, alive, age)
    VALUES ($1, $2, $3, $4)
    RETURNING id;
  `,
  [body.name, body.housesId, body.alive, body.age])
    .then(result => {
      const id = result.rows[0].id;
      return client.query(`
        SELECT 
          characters.id,
          characters.name,
          characters.houses_id,
          houses.id as "housesId",
          houses.name as house,
          characters.alive,
          characters.age
        FROM characters
        JOIN houses 
        ON characters.houses_id = houses.id
        WHERE characters.id = $1; `
      , [id]) 
        .then(result => {
          res.json(result.rows[0]);
        });
    });
});

// this should go at the bottom //
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});