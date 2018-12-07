const client = require('../db-client'); 

client.query(`
  DROP TABLE IF EXISTS dog_table;
  DROP TABLE IF EXISTS dog_size_table;
  `)
  .then(
    () => console.log('drop tables complete'), 
    err => console.log(err)
  )
  .then(() => {
    client.end(); 
  }); 