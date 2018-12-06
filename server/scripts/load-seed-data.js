const client = require('../db-client');
const guitarists = require('../data/guitarists.json');

return Promise.all(
  guitarists.map(guitarist => {
    console.log(guitarist.alive);
    return client.query(`
      INSERT INTO guitarists (name, type, yob, alive)
      VALUES ($1, $2, $3, $4);
    `,
    [guitarist.name, guitarist.type, guitarist.yob, guitarist.alive]);
  })
)
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });