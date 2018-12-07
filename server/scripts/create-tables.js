const client = require('../db-client');

client.query(`
        CREATE TABLE IF NOT EXISTS racer (
            id SERIAL PRIMARY KEY, 
            name VARCHAR(256) NOT NULL,
            age INTEGER NOT NULL, 
            team VARCHAR(256) NOT NULL, 
            pr VARCHAR(256) NOT NULL
        );  
    `)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });