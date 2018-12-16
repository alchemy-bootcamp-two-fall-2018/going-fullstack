const client = require('../db-client');

client.query(`
  DROP TABLE IF EXISTS hero;
  DROP TABLE IF EXISTS group;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });