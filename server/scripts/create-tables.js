const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:1234@localhost:5432/organizations';

const client = new Client(databaseUrl);

//const client = require('../db-client');

//client.query(`
client.connect()
  .then(() => {
    // rem from below: category_id VARCHAR(256) NOT NULL NOT NULL REFERENCES (categories(id))
    return client.query(`
      CREATE TABLE IF NOT EXISTS nonprofits (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL, 
        
        city VARCHAR(32) NOT NULL,
        description VARCHAR(256),
        employees NUMERIC,
        metropol BOOLEAN,
        category VARCHAR(256)
      );
    `);
  })
  // CREATE TABLE IF NOT EXISTS categories (
  //   id SERIAL PRIMARY KEY,
  //   name VARCHAR(256) NOT NULL,
  //   short_name VARCHAR(256) NOT NULL,
  // );
  .then(
    () => console.log('create-tables is connected'),
    err => console.log(err),
  )
  .then(() => {
    client.end();
  });
