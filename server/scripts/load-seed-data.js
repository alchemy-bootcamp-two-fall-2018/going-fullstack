const client = require('./db-client.js');
const characters = require('../data/characters.json');
const houses = require('./houses.js');

Promise.all(
  houses.map(houses => {
    return client.query(`
      INSERT INTO houses (name)
      VALUES ($1);
    `,
    [houses.name]);
  })
)
  .then(() => {
    return Promise.all(
      characters.map(character => {
        return client.query(`
                INSERT INTO characters (name, houses_id, alive, age)
                SELECT
                  $1 as name,
                  id as houses_id,
                  $2 as alive,
                  $3 as age
                  FROM houses
                  WHERE name = $4
            `,
        [character.name, character.alive, character.age, character.house]);
      })
    );
  })
  .then(
    () => console.log('seed data load complete'), 
    err => console.log(err))
  .then(() => {client.end();
  });