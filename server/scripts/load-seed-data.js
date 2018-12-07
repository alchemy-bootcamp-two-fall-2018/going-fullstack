const client = require('../db-client');
const nonprofits = require('./nonprofits.json');
const metropolitans = require('metropolitans');

Promise.all(
  metropolitans.map(metropolitans => {
    return client.query(`
      INSERT INTO metropolitans (name)
      VALUES ($1);
    `,
    [metropolitans.name]);
  })
)
  .then(() => {
    return Promise.all(
      nonprofits.map(nonprofit => {
        return client.query(`
          INSERT INTO nonprofits (name, category, city, description, employees, metro_id)
          SELECT
            $1 as name,
            $2 as category,
            $3 as city,
            $4 as description,
            $5 as employees,
            $ as metro_id
        `,
        [nonprofit.name, nonprofit.category, nonprofit.city, nonprofit.description, nonprofit.employees, nonprofit.metropolitan]);
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