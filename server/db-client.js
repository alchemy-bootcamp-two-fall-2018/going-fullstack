const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:1234@localhost:5432/organizations';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      DROP TABLE IF EXISTS nonprofits;
    `);
  })
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });