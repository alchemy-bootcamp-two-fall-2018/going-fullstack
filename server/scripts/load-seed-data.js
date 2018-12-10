const pg = require('pg');
const Client = pg.Client;
//const client = require('../db-client');
const databaseURL = 'postgres://postgres:1234@localhost:5432/organizations';
const nonprofits = require('./nonprofits.json');
//const metropolitans = require('metropolitans');

// Promise.all(
//   metropolitans.map(metropolitans => {
//     return client.query(`
//       INSERT INTO metropolitans (name)
//       VALUES ($1);
//     `,
//     [metropolitans.name]);
//   })
// )

const client = new Client(databaseURL);

client.connect()
  .then(() => {
    return Promise.all(
      nonprofits.map(nonprofit => {
        // made new function "nonprofit" above
        // from below:
        // SELECT
        // $1 as name,
        // $2 as category, (later this will be category_id)
        // $3 as city,
        // $4 as description,
        // $5 as employees,
        // $ as metropol; (+ for now category is added to end)
        return client.query(`
          INSERT INTO nonprofits (name, city, description, employees, metropol, category)
          VALUES ($1, $2, $3, $4, $5, $6);
        `,
        [nonprofit.name, nonprofit.city, nonprofit.description, nonprofit.employees, nonprofit.metropol, nonprofit.category]);
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