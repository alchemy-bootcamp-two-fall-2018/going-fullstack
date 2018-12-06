const client = require('../db-client');

return client.query(`
  CREATE TABLE IF NOT EXISTS guitar (
    id SERIAL PRIMARY KEY,
    brand VARCHAR(256) NOT NULL,
    model VARCHAR(256) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS guitarists (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    type VARCHAR(256),
    yob INTEGER,
    guitar_id INTEGER NOT NULL REFERENCES guitar(id),
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