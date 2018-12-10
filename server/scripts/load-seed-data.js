const client = require('../db-client');
const books = require('./books.json');
const genres = require('../../server/lib/routes/genres');

Promise.all(
  genres.map(genre => {
    return client.query(`
      INSERT INTO genre (genre, short_name)
      VALUES ($1, $2);
    `,
    [genre.genre, genre.shortName]);
  })
)
  .then(() => {
    return Promise.all(
      books.map(book => {
        return client.query(`
            INSERT INTO books (title, author, genre_id, pages, good)
            SELECT
              $1 as title,
              $2 as author,
              id as genre_id,
              $3 as pages,
              $4 as good
            FROM genre
            WHERE short_name = $5;
          `,
        [book.title, book.author, book.pages, book.good, book.genre]);
      })
    );
  })
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });