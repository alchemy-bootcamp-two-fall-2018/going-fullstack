const client = require('../db-client');
const islands = require('./islands.json');
const amazingness = require('./amazingness');

Promise.all(
  amazingness.map(size => {
    return client.query(`
    INSERT INTO amazingness (name, short_name)
    VALUES ($1, $2);
    `,
    [amazingness.name, amazingness.shortName]);
  })
)


  .then(() => {
    return Promise.all(
      islands.map(island => {
        return client.query(`
          INSERT INTO islands (name, loca, image, is_amazing, amazingness)
          SELECT
            $1 as name,
            $2 as loca,
            $3 as image,
            $4 as is_amazing,
            id as amazingness_id
          FROM amazingness
          WHERE short_name = $5;
        `,
        [island.name, island.loca, island.image, island.isAmazing, island.amazingness]);
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