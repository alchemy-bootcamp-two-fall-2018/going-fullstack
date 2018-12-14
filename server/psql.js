const pg = require('pg');
const fs = require('fs');
const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/characters';
const client = new Client(dbUrl);
client.connect();

client.query(`
    SELECT name, house, alive, age FROM characters;
`)
  .then(results => {
    fs.writeFileSync('character.json'),
    JSON.stringify(results.rows, true, 2);
  })
  .catch(err => {
    console.log(err);
  });