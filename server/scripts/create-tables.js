const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS metropolitans (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
  );

  CREATE TABLE IF NOT EXISTS nonprofits (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL, 
    category VARCHAR(256) NOT NULL,
    city VARCHAR(256) NOT NULL,
    description VARCHAR(256),
    employees NUMERIC,
    metro_id BOOLEAN NOT NULL REFERENCES (metropolitans(id)),
  );
`)
  .then(
    () => console.log('create-tables is connected'),
    err => console.log(err),
  )
  .then(() => {
    client.end();
  });
