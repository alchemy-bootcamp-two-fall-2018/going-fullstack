// const pg = require('pg');
// const Client = pg.Client;
const client = require('../db-client');
//const databaseURL = 'postgres://postgres:1234@localhost:5432/organizations';
const nonprofits = require('./nonprofits.json');
const categories = require('./categories');

// const client = new Client(databaseURL);
//client.connect()
Promise.all(
  categories.map(category => {
    return client.query(`
      INSERT INTO category (name, short_name)
      VALUES ($1, $2);
    `,
    [category.name, category.shortName]);
  })
)
  .then(() => {
    return Promise.all(
      nonprofits.map(nonprofit => { 
        return client.query(`
          INSERT INTO nonprofit (name, city, description, employees, metropol, category_id)
          SELECT
            $1 as name,
            $2 as city,
            $3 as description,
            $4 as employees,
            $5 as metropol,
            id as category_id
          FROM category
          WHERE short_name = $3;
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