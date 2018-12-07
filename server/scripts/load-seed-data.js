const client = require('../db-client');
const guitarists = require('../data/guitarists.json');
const guitars = require('./guitars');

Promise.all(
  guitars.map(guitar => {
    return client.query(`
      INSERT INTO guitar (brand, model)
      VALUES ($1, $2);
    `,
    [guitar.brand, guitar.model]);
  })
)
  .then(() => {
    return Promise.all(
      guitarists.map(guitarist => {
        return client.query(`
          INSERT INTO guitarists (name, guitar_id, yob, type, alive)
          SELECT 
            $1 as name, 
            id as guitar_id,
            $2 as yob,
            $4 as type,
            $5 as alive,
            $6 as model
          FROM guitar
          WHERE model = $3;
        `,
        [guitarist.name, guitarist.yob, guitarist.guitar, guitarist.type, guitarists.alive]);
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