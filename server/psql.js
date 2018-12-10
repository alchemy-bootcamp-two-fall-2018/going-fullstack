const fs = require('fs');
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:1234@localhost:5432/organizations';

const client = new Client(databaseUrl);

client.connect();
client.query (`
    SELECT name, city, description, employees, metropol, category FROM nonprofits;
`)
  .then(
    results => {
      fs.writeFileSync(
        'nonprofits.json',
        JSON.stringify(results.rows, true, 3)
      );
    },
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });