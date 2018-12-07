const express = require('express');
const client = require('../../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap



router.get('/', (req, res) => {
  client.query(`
    SELECT 
      animals.id, 
      animals.name as name, 
      animals.weight as weight,
      animals.mammal as mammal,
      animals.image as image,
      size.id as "sizeId",
      size.name as size
    FROM animals
    JOIN size
    ON animals.size_id = size.id
    ORDER BY name ASC;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

router.get('/:id', (req, res) => {
  client.query(`
  SELECT 
    animals.id, 
    animals.name as name, 
    animals.weight as weight,
    animals.mammal as mammal,
    animals.image as image,
    size.id as "sizeId",
    size.name as size
  FROM animals
  JOIN size
  ON animals.size_id = size.id
  WHERE animals.id = $1;
    
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

router.post('/', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO animals (name, weight, mammal, size_id, image)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id;
  `,
  [body.name, body.weight, body.mammal, body.sizeId, body.image])
    .then(result => {
      const id = result.rows[0].id;

      return client.query(` 
      SELECT
        animals.id,
        animals.name as name,
        animals.weight as weight,
        animals.mammal as mammal,
        animals.image as image,
        size.id as "sizeId",
        size.name as size
      FROM animals
      JOIN size
      ON animals.size_id = size.id
      WHERE animals.id = $1;
      `,
      [id]);
    })
    .then(result => {
      res.json(result.rows[0]);
    });
});

router.delete('/:id', (req, res) => {
  client.query(`
    DELETE FROM animals WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json({ removed:result.rowCount === 1 });
    });
});

module.exports = router;