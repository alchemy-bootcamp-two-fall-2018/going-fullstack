const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/crosscountry';
const racers = require('./racers.json');

const client = new Client(databaseUrl);

client.connect()
  .then (() => {
    return Promise.all(
      racers.map(racer => {
        return client.query (`
                INSERT INTO racers (name, age, gender, varsity, pr)
                VALUES ($1, $2, $3, $4, $5);
            `,
        [racer.name, racer.age, racer.gender, racer.varsity, racer.pr]);
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