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

// SELECT
//   $1 as name,
//   $2 as city,
//   $3 as description,
//   $4 as employees,
//   $5 as metropol,
//   $6 as category FROM nonprofits;