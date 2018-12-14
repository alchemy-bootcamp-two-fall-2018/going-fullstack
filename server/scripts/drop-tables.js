const client = require('./db-client.js');

client.query(`
    DROP TABLE IF EXISTS characters;
    DROP TABLE IF EXISTS houses;`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  ).then(() => {
    client.end();
  });