const client = require('../db-client');

client.query(`

  CREATE TABLE IF NOT EXISTS nonprofits (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL, 
    category_id VARCHAR(256) NOT NULL NOT NULL REFERENCES (categories(id))
    city VARCHAR(32) NOT NULL,
    description VARCHAR(256),
    employees NUMERIC,
    metropol BOOLEAN,
  );
  CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    short_name VARCHAR(256) NOT NULL,
  );
`)
  .then(
    () => console.log('create-tables is connected'),
    err => console.log(err),
  )
  .then(() => {
    client.end();
  });
