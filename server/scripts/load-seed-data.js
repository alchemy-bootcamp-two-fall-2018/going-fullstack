const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:1234@localhost:5432/nonprofit';
const nonprofits = require('./nonprofits.json');

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return Promise.all(
      nonprofits.map(nonprofit => {
        return client.query(`
          INSERT INTO nonprofits (name, category, city, description, employees, metropolitan)
          VALUES ($1, $2, $3, $4, $5, $6);
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