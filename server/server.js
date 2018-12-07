const express = require('express'); 
const app = express(); 
const morgan = require('morgan'); 
const pg = require('pg'); 

app.use(morgan('dev')); 

app.use(express.json()); 

const Client = pg.Client; 
const dbUrl = 'postgres://localhost:5432/dog_picker'; 
const client = new Client(dbUrl); 

client.connect();

app.get('/api/dog_picker', (req, res) => {
  client.query(`
    SELECT id, name, breed, weight, isAdopted FROM dog_table;
    `)
    .then(result => {
      res.json(result.rows); 
    }); 
}); 

app.get('/api/dog_picker/:id', (req, res) => {
  client.query(`
    SELECT * FROM dog_table WHERE id = $1;
    `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]); 
    }); 
});

app.post('/api/dog_picker', (req, res) => {
  const body = req.body; 
  console.log('server', body); 
  client.query(`
    INSERT INTO dog_table (name, breed, weight, isAdopted) 
    VALUES($1, $2, $3, $4)
    RETURNING id, name, breed, weight, isAdopted; 
    `,
  [body.name, body.breed, body.weight, body.isAdopted])
    .then(result => {
      res.json(result.rows[0]); 
    });
});

app.delete('/api/dog_picker/:id', (req, res) => {
  client.query(`
    DELETE FROM dog_table WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json({ removed:result.rowCount === 1 }); 
    });
});

const PORT = 3000; 

app.listen(PORT, () => {
  console.log('server app started on port', PORT); 
}); 