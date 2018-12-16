const pg = require('pg');
const Client = pg.Client;
const DATABASE_URL = 'postgres://postgres:1234@localhost:5432/organizations';
const client = new Client(DATABASE_URL);

client.connect()
  // .then(() => {
  //   return client.query(`
  //     DROP TABLE IF EXISTS nonprofit;
  //   `);
  // })
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
client.on('error', err => {
  console.error('\n**** DATABASE ERROR ****\n\n', err);
});
module.exports = client;