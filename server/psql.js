const fs = require('fs'); 

const pg = require('pg'); 

const Client = pg.Client; 

const databaseUrl = 'postgres://localhost:5432/dog_picker'; 

const client = new Client(databaseUrl); 

client.connect(); 

client.query(`
  SELECT name, breed, weight FROM dog_picker; 
`)
  .then(
    results => {
      fs.writeFileSync(
        'student.json',
        JSON.stringify(results.rows, true, 2)
      );
    },
  )
  .then(() => {
    client.end(); 
  }); 