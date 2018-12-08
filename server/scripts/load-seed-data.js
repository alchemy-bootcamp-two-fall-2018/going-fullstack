const client = require('../db-client');
const islands = require('./islands.json');
const ratings = require('./ratings');

Promise.all(
  ratings.map(rating => {
    return client.query(`
    INSERT INTO rating (name, short_name)
    VALUES ($1, $2);
    `,
    [rating.name, rating.shortName]);
  })
)
  .then(() => {
    return Promise.all(
      islands.map(island => {
        return client.query(`
          INSERT INTO island (name, loca, image, is_amazing, rating_id)
          SELECT
            $1 as name,
            $2 as loca,
            $3 as image,
            $4 as is_amazing,
            id as rating_id
          FROM rating
          WHERE short_name = $5;
        `,
        [island.name, island.loca, island.image, island.isAmazing, island.rating]);
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