const pg = require('pg'); 
const Client = pg.Client; 
const databaseUrl = 'postgres://localhost:5432/dog_picker'; 
const dogs = require('./dogs.json'); 

const client = new Client(databaseUrl); 

client.connect()
  .then(() => {
    return Promise.all(
      dogs.map(dog => {
        return client.query(`
        INSERT INTO dog_table (name, breed, weight)
        VALUES ($1, $2, $3);
        `,
        [dog.name, dog.breed, dog.weight]); 
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