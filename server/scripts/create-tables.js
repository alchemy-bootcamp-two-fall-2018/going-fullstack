//const pg = require('pg');
// const Client = pg.Client;
// const databaseUrl = 'postgres://postgres:1234@localhost:5432/organizations';

//const client = new Client(databaseUrl);

const client = require('../db-client');

client.query(`
  .then(() => {
    CREATE TABLE IF NOT EXISTS category (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256) NOT NULL,
      short_name VARCHAR(256) NOT NULL,
    );
  CREATE TABLE IF NOT EXISTS nonprofit (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL, 
    
    city VARCHAR(32) NOT NULL,
    description VARCHAR(256),
    employees NUMERIC,
    metropol BOOLEAN,
    category_id INTEGER NOT NULL REFERENCES category(id)
  );
`)
  .then(
    () => console.log('create-tables is connected'),
    err => console.log(err),
  )
  .then(() => {
    client.end();
  });
