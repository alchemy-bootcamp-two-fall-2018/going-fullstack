//const app = require('./lib/app');
const express = require('express');
const app = express();
const morgan = require('morgan');
const client = require('./db-client');
//const pg = require('pg');

app.use(morgan('dev'));
app.use(express.json());

// const Client = pg.Client;
// const dbUrl = 'postgres://postgres:1234@localhost:5432/organizations';
// const client = new Client(dbUrl);
// client.connect();

app.get('/api/categories', (req, res) => {
  client.query(`
    SELECT id, name, short_name as "shortName"
    FROM category
    ORDER BY name;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/nonprofits', (req, res) => {

  client.query(`
    SELECT
      nonprofit.id,
      nonprofit.name as name,
      category.id as "categoryId",
      category.name as category
    FROM nonprofit
    JOIN category
    ON nonprofit.category_id = category.id
    ORDER BY name ASC;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/nonprofits/:id', (req, res) => {
  client.query(`
    SELECT * FROM nonprofit WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/nonprofits', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO nonprofit (name, city, description, employees, metropol, category_id)
    VALUES($1, $2, $3, $4, $5, $6)
    RETURNING id;
  `,
  [body.name, body.city, body.description, body.employees, body.metropol, body.categoryId])
    .then(result => {
      const id = result.rows[0].id;
      return client.query(`
        SELECT
          nonprofit.id,
          nonprofit.name as name,
          category.id as "categoryId",
        FROM nonprofit
        JOIN category
        ON nonprofit.category_id = category.id
        WHERE nonprofit.id = $1;
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