const fs = require('fs');
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:1234@localhost:5432/nonprofits';

const client = new Client(databaseUrl);

client.connect();
client.query (`
    SELECT name, category, city, description, employees, metropolitan FROM organizations;
`)
  .then(
    results => {
      fs.writeFileSync(
        '.nonprofit.json',
        JSON.stringify(results.rows, true, 3)
      );
    },
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });