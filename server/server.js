const express = require('express');
const app = express();
const client = require('./db-client');
const morgan = require('morgan');

app.get('/api/amazingness', (req, res) => {

  client.query(`
    SELECT id, name, short_name as "shortName" 
    FROM amazingness
    ORDER BY name;
  `)
    .then(result => {
      res.json(result.rows);
    });
});
app.get('/api/islands', (req, res) => {
  client.query(`
  SELECT 
    islands.id, 
    islands.name as name,
    islands.loca as loca,
    islands.image as image,
    islands.is_amazing as isAmazing,
    amazingness.id as "amazingnessID",
    amazingness.name as amazingness    
  FROM islands
  JOIN amazingness
  ON islands.amazingness_id = amazingness.id
  ORDER BY name ASC;
`)
  .then(result => {
    res.json(result.rows);
  });
});

app.get('/api/islands/:id', (req, res) => {
 client.query(`
 SELECT * FROM islands WHERE id = $1;
 `,
 [req.params.id])
   .then(result => {
     res.json(result.rows[0]);
   });
});

app.post('/api/islands', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO islands (name, loca, image, is_amazing, amazingness)
    VALUES($1, $2, $3, $4, $5)
    RETURNING id, name, loca, image, is_amazing as "isAmazing", amazingness;
  `,
  [body.name, body.loca, body.image, body.isAmazing, body.amazingness])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/islands/delete', (req, res) => {
  client.query(`
    DELETE FROM islands WHERE id = $1
  `,
  [req.body.id]);
  res.json();
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app was started on port', PORT);
});