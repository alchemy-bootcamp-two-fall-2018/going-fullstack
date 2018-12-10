const fs = require('fs'); 

const pg = require('pg'); 

const Client = pg.Client; 

const databaseUrl = 'postgres://localhost:5432/islanddb'; 

const client = new Client(databaseUrl); 

client.connect(); 

client.query(`
  SELECT name, loca, image, is_amazing FROM islands; 
`)
  .then(
    results => {
      fs.writeFileSync(
        'islands.json',
        JSON.stringify(results.rows, true, 2)
      );
    },
    err => console.log(err)
  )
  .then(() => {
    client.end(); 
  }); 