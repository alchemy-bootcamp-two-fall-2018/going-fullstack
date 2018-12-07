
const client = require('../db-client');


client.query(`
  CREATE TABLE IF NOT EXISTS author (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    url VARCHAR(256) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS article (
    id SERIAL PRIMARY KEY,
    author VARCHAR(256) NOT NULL,
    author_id INTEGER NOT NULL REFERENCES author(id),
    views INTEGER
    );

`)
  
  .then(
    () => console.log('create tables complete'),
    // err => console.log(err)
  )
  .then(() => {
    client.end();
  });