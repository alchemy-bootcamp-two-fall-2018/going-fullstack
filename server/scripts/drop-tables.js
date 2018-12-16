// const pg = require('pg');
// const Client = pg.Client;
// const databaseUrl = 'postgres://postgres:1234@localhost:5432/organizations';

// const client = new Client(databaseUrl);
const client = require('../db-client');

client.query(`
  DROP TABLE IF EXISTS nonprofit;
  DROP TABLE IF EXISTS category;
`)
// client.connect()
//   .then(() => {
//     return client.query(`
//     DROP TABLE IF EXISTS nonprofit;
//   `);
//   })
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  );
// .then(() => {
//   client.end();
// });
