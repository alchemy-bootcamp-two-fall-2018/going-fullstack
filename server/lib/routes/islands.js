const express = require('express');
const client = require('../../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

.get('/:id', (req, res) => {
  client.query(`
    SELECT 
      id, 
      name,
      loca,
      image,
      is_amazing as "isAmazing",
      rating_id as "ratingId"
    FROM student 
    WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
})

.post('/', (req, res) => {
  const body = req.body;

  client.query(`
  INSERT INTO student (name, loca, image, is_amazing,  rating_id)
  VALUES($1, $2, $3)
  RETURNING 
    id, 
    name,
    is_amazing as "isAmazing",
    rating_id as "ratingId";
`,
[body.name, body.loca, body.image, body.isAmazing, body.ratingId])
  .then(result => {
    res.json(result.rows[0]);
  });
})

