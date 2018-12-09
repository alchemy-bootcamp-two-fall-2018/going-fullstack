const express = require('express');
const client = require('../../db-client');
const Router = express.Router;
const router = Router();  //eslint-disable-line new-cap

router
  .get('/api/books', (req, res) => {
    client.query(`
      SELECT
        books.id, 
        books.title as title,
         
        genre_id as "genreId",
        genre.genre as genre
      FROM books
      JOIN genre
      ON books.genre_id = genre.id;
    `)
      .then(result => {
        res.json(result.rows);
      });
  })

  
  .get('/api/books/:id', (req, res) => {
    client.query(`
      SELECT * FROM books WHERE id = $1;
    `,
    [req.params.id])
      .then(result => {
        res.json(result.rows[0]);
      });
  })

  .post('/api/books', (req, res) => {
    const body = req.body;

    client.query(`
      INSERT INTO books (title, genre_id)
      VALUES($1, $2)
      RETURNING id;
    `,
    [body.title, body.genreId])
      .then(result => {
        const id = result.rows[0].id;
        
        return client.query(`
          SELECT
            books.id,
            books.title as title,
            genre.id as "genreID",
            genre.genre as genre
          FROM books
          JOIN genre
          ON books.genre_id = genre.id
          WHERE books.id = $1;
        `,
        [id]);
      })
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;