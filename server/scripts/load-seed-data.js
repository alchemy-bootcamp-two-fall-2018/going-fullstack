const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/superheroes';
const superheroes = require('./superheroes.json');

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return Promise.all(
      superheroes.map(superhero => {
        return client.query(`
          INSERT INTO hero (name, age, track)
          VALUES ($1, $2, $3);
        `,
        [superhero.name, superhero.age, superhero.track]);
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