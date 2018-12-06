const client = require('../db-client');

return client.query(`
  CREATE TABLE IF NOT EXISTS guitarists (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    type VARCHAR(256),
    yob INT,
    alive BOOLEAN
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });