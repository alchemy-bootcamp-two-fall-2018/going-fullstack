const pg = require('pg');

const Client = pg.Client;

const databaseUrl = 'postres://postgres:Stitch32.@localhost:5432/books';

const client = new Client(databaseUrl);

client.query(`
  DROP TABLE IF EXISTS book_genre;
  DROP TABLE IF EXISTS books;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });