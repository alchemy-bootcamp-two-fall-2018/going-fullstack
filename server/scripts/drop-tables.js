const client = require('../db-client');

client.query(`
  DROP TABLE IF EXISTS nonprofits;
  DROP TABLE IF EXISTS metropolitans;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });