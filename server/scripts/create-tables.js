const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS genres (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
  );

  CREATE TABLE INTO NOT EXISTS singers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    age INTEGER REFERENCES genres(id),
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