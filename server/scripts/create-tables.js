const client = require('../db-client');

client.query(`
CREATE TABLE IF NOT EXISTS rating (
  id SERIAL PRIMARY KEY,
  name VARCHAR(256) NOT NULL,
  short_name VARCHAR(4) NOT NULL
);

  CREATE TABLE IF NOT EXISTS islands) (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    loca VARCHAR(256),
    image VARCHAR(256),
    is_amazing BOOLEAN,
    rating_id INTEGER NOT NULL REFERENCES rating(id)
  );
  `)
  
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  }); 