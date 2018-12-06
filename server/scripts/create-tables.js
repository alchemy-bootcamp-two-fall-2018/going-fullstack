const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/crosscountry';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
        CREATE TABLE IF NOT EXISTS racers (
            id SERIAL PRIMARY KEY, 
            name VARCHAR(256) NOT NULL,
            age INTEGER NOT NULL, 
            gender VARCHAR(256) NOT NULL, 
            varsity VARCHAR(256) NOT NULL, 
            pr VARCHAR(256) NOT NULL
        );  
    `);
  })
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });