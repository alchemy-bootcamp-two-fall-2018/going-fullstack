const pg = require('pg');
 const Client = pg.Client;
 const databaseUrl = 'postgres://localhost:5432/islanddb';
 const client = new Client(databaseUrl);
 client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS islands
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        loca VARCHAR(256),
        image VARCHAR(256),
        is_amazing Boolean
      );
    `);
  })
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  }); 