const pg = require('pg'); 

const Client = pg.Client;

const databaseURL = 'postgres://localhost:5432/dog_picker'; 

const client = new Client(databaseURL); 

client.connect ()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS dog_table (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        breed VARCHAR(256),
        weight Int
        );
      `); 
  })
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end(); 
  }); 