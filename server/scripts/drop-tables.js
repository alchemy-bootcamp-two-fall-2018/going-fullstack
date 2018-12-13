const client = require('../db-client');

client.query(`
    DROP TABLE IF EXISTS racer;
    DROP TABLE IF EXISTS team;
    `)
  
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
