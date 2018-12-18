const client = require('../db-client');
const superheroes = require('./superheroes.json');
const gangs = require('./gangs');

Promise.all(
  gangs.map(gang => {
    return client.query(`
      INSERT INTO gang (name, short_name)
      VALUES ($1, $2);
    `,
    [gang.name, gang.shortName]);
  })
)
  .then(() => {
    return Promise.all(
      superheroes.map(hero => {
        return client.query(`
          INSERT INTO hero (name, gang_id, age, ability)
          SELECT
            $1 as name,
            id as gang_id,
            $2 as age,
            $3 as ability
          FROM gang
          WHERE short_name = $4;
        `,
        [hero.name, hero.age, hero.ability, hero.gang]);
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