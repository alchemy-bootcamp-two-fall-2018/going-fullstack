const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/crosscountry';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
        CREATE TABLE IF NOT EXISTS racers (
            id SERIAL PRIMARY KEY, 
            name VARCHAR(256),
            age INTEGER, 
            gender VARCHAR(256), 
            varsity VARCHAR(256), 
            pr VARCHAR(256)
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