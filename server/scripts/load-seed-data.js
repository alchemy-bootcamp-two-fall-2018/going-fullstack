const client = require('../db-client');
const superheroes = require('./superheroes.json');

// client.connect()
// .then(() => {
Promise.all(
  superheroes.map(hero => {
    return client.query(`
      INSERT INTO hero (name, age, ability)
      VALUES ($1, $2, $3);
    `,
    [hero.name, hero.age, hero.ability]);
  })
)
  .then(() => {
    return Promise.all(
      superheroes.map(hero => {
        return client.query(`
          INSERT INTO hero (name, age, ability)
          SELECT
            $1 as name,
            $2 as age,
            $3 as ability
          FROM hero
          WHERE name = $1;
        `,
        [hero.name, hero.age, hero.ability]);
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