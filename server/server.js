const express = require('express');
const app = express();
const morgan = require('morgan');
const client = require('./db-client');

// enhanced logging
app.use(morgan('dev'));

// register the json "middleware" body parser
app.use(express.json());

/* Defined routes: METHOD, URL PATH */
// method == app.<method>
// path = app.get('/this/is/path', ...)

app.get('/api/genres', (req, res) => {
  client.query(`
    SELECT id, name, short_name as "shortName"
    FROM genres
    ORDER BY name;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/singers', (req, res) => {
  client.query(`
    SELECT
      singers.id,
      singers.name as name,
      singers.age,
      singers.summary,
      genres.id as genre_id,
      genres.name as genre
    FROM singers
    JOIN genres
    ON singers.genre_id = genres.id
    ORDER BY singers.name ASC;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/singers/:id', (req, res) => {
  client.query(`
      SELECT * FROM singers WHERE id = $1;
    `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/singers', (req, res) => {
  const body = req.body;

  client.query(`
      INSERT INTO singers (name, genre, age, summary)
      VALUES($1, $2, $3, $4)
      RETURNING id, name, genre, age, summary;
    `,
  [body.name, body.genre, body.age, body.summary])
    .then(result => {
      res.json(result.rows[0]);
    });
});

//WIP delete functionality`
// app.delete('/api/singers', (req, res) => {
//   const body = req.body;

//   client.query(`
//     DELETE FROM singers
//     WHERE id = $1;
//   `,
//   [body.id]);
// });

/* end defined routes */

/* configure and start the server */
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});

/* end configure and server start */