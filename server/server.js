const express = require('express');
const app = express();
const morgan = require('morgan');
const client = require('./db-client');

/* setting up simple database */

app.use(morgan('dev'));

app.use(express.json());

/* connect to pg */

console.log('I am the server file');

// app.get('/api/articles', (req, res) => {

//   client.query(`
//     SELECT id, name, short_name as "shortName"
//     FROM article_category_table
//     ORDER BY name;
//   `)
//     .then(result => {
//       res.json(result.rows);
//     });
// });

app.get('/api/categories', (req, res) => {
  client.query(`
    SELECT id, name, short_name as "shortName"
    FROM "categories"
    ORDER BY name;
  `)
    .then(result => {
      res.json(result.rows);
    });
});


app.get('/api/articles', (req, res) => {
  client.query(`
    SELECT
      article.id,
      article.title as title,
      article.author_id as "authorId",
      article.views as views,
      article.is_clickbait as "isClickbait"
    FROM article
    JOIN article_category_table
    ON article.author_id = article_category_table.id
    ORDER BY views DESC, name ASC;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/articles/:id', (req, res) => {

  client.query(`
    SELECT * FROM article_category_table WHERE id = $1
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/articles', (req, res)=> {
  const body = req.body;

  client.query(`
    INSERT INTO article (title, author_id, views, is_clickbait)
    VALUES ($1, $2, $3, $4)
    RETURNING id;
  `,
  [body.title, body.author_id, body.views])
    .then(result => {
      const id = result.rows[0].id;

      return client.query(`
        SELECT
          article.id,
          article.title as title,
          author_id as "authorId",
          article.views as views
        FROM article
        JOIN article_category_table
        ON article.track_id = track.id
        WHERE article.id = $1;
      `,
      [id]);
    })
    .then(result => {
      res.json(result.rows[0]);
    });
});

/* configure and start the server */
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);

  console.log('running on', PORT);
});