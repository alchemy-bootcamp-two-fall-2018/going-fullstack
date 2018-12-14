const client = require('./db-client.js');

client.query(`
        CREATE TABLE IF NOT EXISTS houses (
          id SERIAL PRIMARY KEY,
          name VARCHAR(256) NOT NULL
        );
        CREATE TABLE IF NOT EXISTS characters (
            id SERIAL PRIMARY KEY,
            name VARCHAR(256) NOT NULL,
            houses_id INTEGER NOT NULL REFERENCES houses(id),
            alive BOOLEAN,
            age INTEGER
        );
    `).then(
  () => console.log('create tables complete'),
  err => console.log(err)
).then(() => {
  client.end();
});