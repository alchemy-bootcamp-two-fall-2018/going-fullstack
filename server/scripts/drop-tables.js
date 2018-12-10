const client = require('../db-client'); 

client.query(`
  DROP TABLE IF EXISTS dog_table;
  DROP TABLE IF EXISTS dog_size_table;
  `)
  .then(() => {
    client.end(); 
  }); 