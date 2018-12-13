const express = require('express');
const client = require('../../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router.get('/', (req, res) => {
  client.query(`
    SELECT 
      islands.id, 
      islands.name as name, 
      islands.loca as loca,
      islands.image as image,
      islands.is_amazing as "isAmazing",
      rating.id as "ratingId",
      rating.name as rating
    FROM islands
    JOIN rating
    ON islands.rating_id = rating.id
    ORDER BY name ASC;
  `)
    .then(result => {
      res.json(result.rows);
  });
});

router.get('/:id', (req, res) => {
  client.query(`
    SELECT 
      islands.id, 
      islands.name as name,
      islands.loca as loca,
      islands.image as image,
      is_amazing as "isAmazing",
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

router.post('/', (req, res) => {
  const body = req.body;
  console.log('BANANANAN\n\n\n', body);

  client.query(`
    INSERT INTO islands (name, loca, image, is_amazing, rating_id)
    VALUES($1, $2, $3, $4, $5)
    RETURNING id;
`,
[body.name, body.loca, body.image, body.isAmazing, body.ratingId])
  .then(result => {
    const id = result.rows[0].id;

    return client.query(` 
    SELECT
      islands.id,
      islands.name as name,
      islands.loca as loca,
      islands.image as image,
      islands.is_amazing as "isAmazing",
      rating.id as "ratingId",
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

router.put('/:id', (req, res) => {
const body = req.body;

client.query(`
  UPDATE islands
  SET
    name = $1,
    loca = $2, 
    image = $3,
    is_amazing = $4,
    rating_id = $5
  WHERE id = $6
  RETURNING 
    id,
    name, 
    loca,
    image,
    is_amazing as "isAmazing",
    rating_id as "ratingId";
`,
[body.name, body.loca, body.image, body.isAmazing, body.ratingId, body.id])
  .then(result => {
    console.log('this is the result', result);
    res.json(result.rows[0]);
  });
});

router.delete('/:id', (req, res) => {
  client.query(`
   DELETE FROM islands WHERE id = $1;
`,
[req.params.id])
  .then(result => {
    res.json({ removed:result.rowCount === 1 });
  });
});

module.exports = router;