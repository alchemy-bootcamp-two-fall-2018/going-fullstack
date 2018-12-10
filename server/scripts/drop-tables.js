const client = require('../db-client');

client.query(`
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS genre;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });