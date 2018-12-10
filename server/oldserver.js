const express = require('express');
const app = express();
const morgan = require('morgan');
const client = require('./db-client');

app.use(morgan('dev'));
app.use(express.json());

app.get('/api/metropolitans', (req, res) => {
  client.query(`
    SELECT id, name
    FROM metropolitans
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
      
      nonprofit.city as "city"
      nonprofit.description as "description",
      nonprofit.employees as "employees",
      metropolitans.id = "metroId",
      metropolitans.name as metropolitan,
      nonprofit.category as "category",
    FROM nonprofits
    JOIN metropolitans
    ON nonprofit.metro_id = metropolitans.id;
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
    INSERT INTO nonprofit (name, city, description, employees, metropol, category)
    VALUES($1, $2, $3, $4, $5)
    RETURNING id, name, city, description, employees, metropol, category;
  `,
  [body.name, body.city, body.description, body.employees, body.metropol, body.category])
    .then(result => {
      const id = result.rows[0].id;

      return client.query(`
        SELECT
          nonprofit.id,
          nonprofit.name as name,
          metropolitans.id as "metroId",
          metropolitans.name as metropolitan
        FROM nonprofits
        JOIN metropolitans
        ON nonprofits.metro_id = metropolitans.id
        WHERE metropolitans.id = $1;
      `,
      [id]);
    })
    .then(result => {
      res.json(result.rows[0]);
    });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on the port', PORT);
});