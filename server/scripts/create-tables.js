const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS genres (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    short_name VARCHAR(16)
  );

  CREATE TABLE IF NOT EXISTS singers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    genre_id INTEGER NOT NULL REFERENCES genres(id),
    age INTEGER,
    summary VARCHAR(256)
  );

`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });