const express = require('express');
const app = express();
const morgan = require('morgan');
const client = require('./db-client');

app.use(morgan('dev'));
app.use(express.json());

app.get('/api/racers', (req, res) => {
  
  client.query(`
    SELECT id, name
    FROM racer;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/racers/:id', (req, res) => {
  client.query(`
    SELECT * FROM racer WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/racers', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO racer (name, age, gender, varsity, pr )
    VALUES($1, $2, $3, $4, $5)
    RETURNING *;
  `,
  [body.name, body.age, body.gender, body.varsity, body.pr])
    .then(result => {
      res.json(result.rows[0]);
    });
});
 
const PORT = 3000;

app.listen(PORT, () => {
});


