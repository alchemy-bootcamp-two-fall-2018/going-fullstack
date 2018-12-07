const express = require('express');
const app = express();
const morgan = require('morgan');
const client = require('./db-client');

app.use(morgan('dev'));
app.use(express.json());

app.get('/api/guitars', (req, res) => {
  client.query(`
    SELECT id, brand, model
    FROM guitar
    ORDER BY brand;
  `)
    .then(result => {
      res.json(result.rows);
    });
});


app.get('/api/guitarists', (req, res) => {
  client.query(`
    SELECT 
      guitarists.id, 
      guitarists.name as name,
      guitarists.yob as yob,
      guitar.id as "guitarId",
      guitarists.type as type
    FROM guitarists
    JOIN guitar
    ON guitarists.guitar_id = guitar.id
    ORDER BY name ASC;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/guitarists/:id', (req, res) => {
  client.query(`
    SELECT * FROM guitarists WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/guitarists', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO guitarists (name, guitar_id, yob, type)
    VALUES($1, $2, $3, $4)
    RETURNING id;
  `,
  [body.name, body.guitarId, body.yob, body.type])
    .then(result => {
      const id = result.rows[0].id;
      
      return client.query(`
        SELECT 
          guitarists.id, 
          guitarists.name as name,
          guitarists.yob as "yob",
          guitar.id as "guitarId",  
          guitar.model as guitar,
          guitarists.type
        FROM guitarists
        JOIN guitar
        ON guitarists.guitar_id = guitar.id 
        WHERE guitarists.id = $1;
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
