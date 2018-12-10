

const client = require('../db-client'); 

client.query(`
  CREATE TABLE IF NOT EXISTS dog_size_table (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    short_name VARCHAR(50) NOT NULL
);
  CREATE TABLE IF NOT EXISTS dog_table (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    breed VARCHAR(256),
    size_id INTEGER NOT NULL REFERENCES dog_size_table(id),
    weight Int, 
    isAdopted boolean
    );
  `)
  .then(() => {
    client.end(); 
  }); 