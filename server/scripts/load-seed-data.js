const client = require('../db-client'); 
const dogs = require('./dogs.json');
const sizes = require('./dog-size'); 

Promise.all(
  sizes.map(size => {
    return client.query(`
    INSERT INTO dog_size_table (name, short_name)
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
        $2 as breed,
        $3 as weight,
        id as size_id,
        $4 as isAdopted
        FROM dog_size_table
        WHERE short_name = $5;
        `,
        [dog.name, dog.breed, dog.weight, dog.isAdopted, dog.size]); 
      })
    );
  })
  .then(() => {
    client.end(); 
  });