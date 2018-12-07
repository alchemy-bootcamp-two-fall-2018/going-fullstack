const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS genre (
    id SERIAL PRIMARY KEY,
    genre VARCHAR(256) NOT NULL,
    short_name VARCHAR(16)
  );

  CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    author VARCHAR(256),
    genre_id INTEGER NOT NULL REFERENCES genre(id),
    pages INTEGER,
    good BOOLEAN
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });