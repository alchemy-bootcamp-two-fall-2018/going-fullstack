const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS group (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    short_name VARCHAR(8) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS hero (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    group_id INTEGER NOT NULL REFERENCES group(id),
    age INTEGER,
    ability VARCHAR(50)
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });