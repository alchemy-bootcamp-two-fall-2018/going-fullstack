const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:1234@localhost:5432/nonprofits';

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
            CREATE TABLE IF NOT EXISTS nonprofits (
                id SERIAL PRIMARY KEY,
                name VARCHAR(256) NOT NULL, 
                category VARCHAR(256) NOT NULL,
                city VARCHAR(256) NOT NULL,
                description VARCHAR(256),
                employees NUMERIC,
                metropolitan BOOLEAN
            );
    `);
  })
  .then(
    () => console.log('create-tables is connected'),
    err => console.log(err),
  )
  .then(() => {
    client.end();
  });
