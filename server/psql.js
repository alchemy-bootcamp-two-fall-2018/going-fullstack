const fs = require('fs'); 

const pg = require('pg'); 

const Client = pg.Client; 

// from islands,?? look at the ending
const databaseUrl = 'postgres://localhost:5432/islands'; 

const client = new Client(databaseUrl); 

client.connect(); 

client.query(`
  SELECT name, loca, isAmaing; 
`)
  .then(
    results => {
      fs.writeFileSync(
        'island.json',
        JSON.stringify(results.rows, true, 2)
      );
    },
    err => console.log(err)
  )
  .then(() => {
    client.end(); 
  }); 