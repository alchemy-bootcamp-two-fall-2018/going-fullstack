
const client = require('../db-client');
const racers = require('./racers.json');

Promise.all( 
  racers.map(racer => {
    return client.query (`
    INSERT INTO racer (name, age, team, pr, previous)
    VALUES ($1, $2, $3, $4, $5);
    `,
    [racer.name, racer.age, racer.team, racer.pr, racer.previous]);
  })
)
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
  
    
  