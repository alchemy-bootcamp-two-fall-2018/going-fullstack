const client = require('../db-client');
const campgrounds = require('./campgrounds.json');
// const forests = require('./forests-data');

Promise.all(
  campgrounds.map(campground => {
    return client.query(`
      INSERT INTO campgrounds (name, forest, sites, rvwaste)
      VALUES ($1, $2, $3, $4);
    `,
    [campground.name, campground.forest, campground.sites, campground.rvwaste]);
  })
)
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });


/*
CODE BELOW REPLACED WITH CODE ABOVE

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/banana';
const campgrounds = require('./campgrounds.json');

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    // "Promise all" does a parallel execution of async tasks
    return Promise.all(
      campgrounds.map(campground => {
        return client.query(`
          INSERT INTO campgrounds (name, forest, sites, rvwaste)
          VALUES ($1, $2, $3, $4);
        `,
        [campground.name, campground.forest, campground.sites, campground.rvwaste]);
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
*/