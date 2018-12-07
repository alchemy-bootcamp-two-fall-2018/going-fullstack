
const client = ('../db-client');
const racers = require('./racers.json');

Promise.all( 
  racers.map(racer => {
    return client.query (`
    INSERT INTO racer (name, age, gender, varsity, pr)
    VALUES ($1, $2, $3, $4, $5);
    `,
    [racers.name, racers.age, racers.gender, racers.varsity, racers.pr]);
  })
)
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
  
    
  