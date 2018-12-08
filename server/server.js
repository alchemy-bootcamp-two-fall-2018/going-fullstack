const express = require('express');
const app = express();
const morgan = require('morgan');
const client = require('./db-client');

//enhanced logging
app.use(morgan('dev'));

//register the json "middleware" body parser
app.use(express.json());

/* defined routes: METHOD, URLPATH */



app.get('/api/genres', (req, res) => {
  client.query(`
    SELECT id, genre, short_name as "shortName"
    FROM genre
    ORDER BY genre;  
  `)
    .then(result => {
      res.json(result.rows);
    });
});

//to do? add ORDER BY title ASC; at end of this query...
app.get('/api/books', (req, res) => {
  client.query(`
    SELECT
      books.id,
      books.title as title,
      books.author as author,
      genre.id as "genreId",
      genre.genre as genre
    FROM books
    JOIN genre
    ON books.genre_id = genre.id;
  `)   
    .then(result => {
      res.json(result.rows);
    });
});



app.get('/api/books/:id', (req, res) => {
  client.query(`
    SELECT * FROM books WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});
  
app.post('/api/books', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO books (title, author, pages, genre, genre_id)
    VALUES($1, $2, $3, $4, $5)
    RETURNING id, title, author, pages, genre, genre_id;
  `,
  [body.title, body.author, body.pages, body.genre, body.genreId])
    .then(result => {
      const id = result.rows[0].id;

      return client.query(`
        SELECT
          books.id,
          books.title as title,
          books.author as author,
          genre.id as "genreId",
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

/* end defined routes*/

/* configure and start the server */

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});
/* end configure and server start */