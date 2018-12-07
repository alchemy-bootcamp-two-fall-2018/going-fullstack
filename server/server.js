const express = require('express');
const app = express();
const client = require('./db-client');
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.json());

app.get('/api/ratings', (req, res) => {

  client.query(`
    SELECT * FROM ratings;
  `)
    .then(result => {
      res.json(result.rows);
    });
});
app.get('/api/islands', (req, res) => {
  client.query(`
  SELECT 
    islands.name,
    islands.loca,
    islands.image,
    islands.is_amazing,
    ratings.rating as rating    
  FROM islands
  JOIN rating
  ON islands.rating_id = rating.id
  WHERE islands.id = $1
  `,
[req.params.id])
  .then(result => {
    res.json(result.rows[0]);
  });
});
app.post('/api/islands/:id', (req, res) => {
  const body = req.body;


app.get('/api/islands/:id', (req, res) => {
 client.query(`
SELECT
  islands.id,
  islands.name as name,
  islands.loca as loca,
  islands.image as image,
  islands.is_amazing as isAmazing,
  rating.id as "ratingId",
  rating.name as rating
FROM islands
JOIN rating
ON islands.rating_id = rating.id 
WHERE islands.id = $1;
`,
 [req.params.id])
   .then(result => {
     res.json(result.rows[0]);
   });
});

app.post('/api/islands', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO islands (name, loca, image, is_amazing, rating)
    VALUES($1, $2, $3, $4, $5)
    RETURNING id. name,loca, image, isAmazing, 
  `,
  [body.name, body.loca, body.image, body.isAmazing, body.rating])
    .then(result => {
      const id = result.rows[0].id;

      return client.query(`
      SELECT
        islands.id
        islands.name as name,
        islands.loca as loca,
        islands.image as image,
        islands.is_amaing as isAmazing,
        rating.id as "ratingID",
        rating.name as rating
      FROM islands
      JOIN rating
      ON islands.rating_id = rating.id
      WHERE islands.id = $1;
      `,
      [id]);
    })
      .then(result => {
        res.json(result.rows[0]);
    });
});

app.delete('/api/islands/:id', (req, res) => {
  client.query(`
    DELETE FROM islands WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json({ removed:result.rowCount === 1 });
    });
  });


const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app was started on port', PORT);
});