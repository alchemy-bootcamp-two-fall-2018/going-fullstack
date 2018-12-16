const client = require('../db-client');
const superheroes = require('./superheroes.json');
const groups = require('./groups');

Promise.all(
  groups.map(group => {
    return client.query(`
      INSERT INTO group (name, short_name)
      VALUES ($1, $2);
    `,
    [group.name, group.shortName]);
  })
)
  .then(() => {
    return Promise.all(
      superheroes.map(hero => {
        return client.query(`
          INSERT INTO hero (name, age, ability, group_id)
          SELECT
            $1 as name,
            $2 as age,
            $3 as ability
            id as group_id
          FROM group
          WHERE short_name = $4;
        `,
        [hero.name, hero.age, hero.ability, hero.group]);
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