const pg = require('pg'); 

const Client = pg.Client; 

// linked to the right place "islands"???
const databaseUrl = 'postgres://localhost:5432/islands'; 

const client = new Client(databaseUrl); 

client.connect()
  .then(() => {
    return client.query(`
      DROP TABLE IF EXISTS island_table;
      `);
  })
  .then(
    () => console.log('drop tables complete'), 
    err => console.log(err)
  )
  .then(() => {
    client.end(); 
  }); 