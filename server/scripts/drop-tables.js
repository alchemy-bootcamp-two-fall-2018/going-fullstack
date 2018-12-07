const client = require('../db-client'); 

client.query(`
  DROP TABLE IF EXISTS islands;
  DROP TABLE IF EXISTS rating;
  `)
  .then(
    () => console.log('drop tables complete'), 
    err => console.log(err)
  )
  .then(() => {
    client.end(); 
  }); 