const client = require('../db-client');

return client.query(`
    DROP TABLE IF EXISTS guitarists;
    DROP TABLE IF EXISTS guitar;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });