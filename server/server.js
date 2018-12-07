const express = require('express'); 
const app = express(); 
const morgan = require('morgan'); 
const client = require('./db-client'); 

app.use(morgan('dev')); 

app.use(express.json()); 

app.get('/api/dog_size_table', (req, res) => {
  client.query(`
    SELECT id, name, short_name as "shortName" 
    FROM dog_size_table
    ORDER BY name;
    `)
    .then(result => {
      res.json(result.rows); 
    }); 
}); 

app.get('/api/dog_picker', (req, res) => {
  client.query(`
    SELECT
      dog_table.id,
      dog_table.name as name,
      dog_table.breed,
      dog_table.weight,
      dog_table.isAdopted,
      dog_size_table.id as "sizeId",
      dog_size_table.short_name as size
      FROM dog_table
      JOIN dog_size_table
      ON dog_table.size_id = dog_size_table.id
      ORDER BY weight DESC, name ASC;
    `)
    .then(result => {
      res.json(result.rows); 
    }); 
});

app.get('/api/dog_picker/:id', (req, res) => {
  client.query(`
  SELECT
      dog_table.id,
      dog_table.name as name,
      dog_table.breed,
      dog_table.weight,
      dog_table.isAdopted,
      dog_size_table.id as "sizeId",
      dog_size_table.short_name as size
      FROM dog_table
      JOIN dog_size_table
      ON dog_table.size_id = dog_size_table.id
      WHERE dog_size_table.id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});
app.post('/api/dog_picker', (req, res) => {
  const body = req.body; 
 
  client.query(`
    INSERT INTO dog_table (name, breed, weight, isAdopted, size_id) 
    VALUES($1, $2, $3, $4, $5)
    RETURNING id;
    `,
  [body.name, body.breed, body.weight, body.isAdopted, body.sizeId])
    .then(result => {
      const id = result.rows[0].id; 

      return client.query(`
        SELECT 
          dog_table.id,
          dog_table.name as name,
          dog_table.breed,
          dog_table.weight,
          dog_table.isAdopted,
          dog_size_table.id as "sizeId",
          dog_size_table.short_name as size
        FROM dog_table
        JOIN dog_size_table
        ON dog_table.size_id = dog_size_table.id
        WHERE dog_table.id = $1;
      `,
      [id]);
    })
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