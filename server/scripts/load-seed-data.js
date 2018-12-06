const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/school';
const islands = require('./islands.json');

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    // "Promise all" does a parallel execution of async tasks
    return Promise.all(
      islands.map(island => {
        return client.query(`
          INSERT INTO islands (name, loca, isAmazing)
          VALUES ($1, $2, $3, $4);
        `,
        [island.name, island.loca, island.isAmazing]);
      })
    );
  })
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });