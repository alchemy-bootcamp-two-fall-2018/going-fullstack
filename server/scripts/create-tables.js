

const client = require('../db-client'); 
  
client.query(`
      CREATE TABLE IF NOT EXISTS dog_table (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        breed VARCHAR(256),
        weight Int, 
        isAdopted boolean
        );
      `)
  // })
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end(); 
  }); 