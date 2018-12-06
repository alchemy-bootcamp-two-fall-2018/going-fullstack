const client = require('../db-client'); 
const dogs = require('./dogs.json');
const sizes = require('./dog-size'); 

Promise.all(
  sizes.map(size => {
    return client.query(`
    INSERT INTO dogSize (name, short_name)
    VALUES ($1, $2);
    `,
    [size.name, size.shortName]);
  })
)
  .then(() => {
    return Promise.all(
      dogs.map(dog => {
        return client.query(`
        INSERT INTO dog_table (name, breed, weight, size_id, isAdopted)
        SELECT
        $1 as name,
        id as size_id,
        $2 as breed,
        $3 as weight
        FROM size 
        WHERE short_name = $4;
        `,
        [dog.name, dog.breed, dog.weight, dog.size, dog.isAdopted]); 
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