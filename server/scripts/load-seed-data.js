const client = require('../db-client');
const singers = require('./singers.json');
const genres = require('./genres-data');

// "Promise all" does a parallel execution of async tasks
Promise.all(
  genres.map(genres => {
    return client.query(`
      INSERT INTO genres (name, short_name)
      VALUES ($1, $2);
    `,
    [genres.name, genres.shortName]);
  })
)
  .then(() => {
    return Promise.all(
      singers.map(singer => {
        return client.query(`
          INSERT INTO singers (name, genre_id, age, summary)
          SELECT
            $1 as name,
            id as genre_id,
            $2 as age,
            $3 as summary
          FROM genres
          WHERE short_name = $4
          `,
        [singer.name, singer.age, singer.summary, singer.genre]);
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