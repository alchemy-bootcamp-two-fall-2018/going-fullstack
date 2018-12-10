const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS hero (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
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