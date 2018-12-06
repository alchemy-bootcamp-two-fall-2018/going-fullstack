const client = require('../db-client');
const singers = require('./singers.json');
const genres = require('.genres');

// "Promise all" does a parallel execution of async tasks
Promise.all(
  genres.map(genres => {
    return client.query(`
      INSERT INTO genres (name)
      VALUES ($1);
    `,
    [genres.name]);
  })
)
  .then(() => {
    return Promise.all(
      singers.map(singers => {
        return client.query(`
          INSERT INTO singers (name, genre_id, age, summary)
          SELECT
            $1 as name,
            id as genre_id
            $2 as age
            $3 as summary
          FROM genres;
          `,
        [singers.name, singers.age, singers.summary]);
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