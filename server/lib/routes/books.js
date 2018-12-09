const express = require('express');
const client = require('../../db-client');
const Router = express.Router;
const router = Router();  //eslint-disable-line new-cap

router
  .get('/', (req, res) => {
    client.query(`
      SELECT
        id,
        title,
        genre_id as "genreId"
      FROM books;
    `)
      .then(result => {
        res.json(result.rows);
      });
  })

  
  .get('/:id', (req, res) => {
    client.query(`
      SELECT 
        id,
        title,
        genre_id as "genreID", 
      FROM books 
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
      INSERT INTO books (title, genre_id)
      VALUES($1, $2)
      RETURNING 
        id,
        title,
        genre_id as "genreId";
    `,
    [body.title, body.genreId])
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;