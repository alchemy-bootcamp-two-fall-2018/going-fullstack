const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS synths (
    name VARCHAR(256) NOT NULL,
    image VARCHAR(256),
    polyphonic BOOLEAN,
    year INT,
    id SERIAL PRIMARY KEY
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });