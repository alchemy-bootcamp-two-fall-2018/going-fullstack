const express = require('express'); 
const app = express(); 
const morgan = require('morgan');
const client = require('./db-client'); 

app.use(morgan('dev')); 

app.use(express.json()); 

const getShortName = n => n
  .toLowerCase()
  .slice(0, 10)
  .trim()
  .replace(/[^a-z]/ig, '-');

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

app.post('/dog_size_table', (res, req) => {
  const body = req.body; 

  client.query(`
    INSERT INTO dog_size_table (name, short_name)
    VALUES ($1, $2)
    RETURNING id, name, short_name as "shortName";
    `,
    [body.name, getShortName(body.shortName)]
    )
      .then(result => {
        res.json(result.rows[0]);
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
      WHERE dog_table.id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});
app.post('/api/dog_picker', (req, res) => {
  const body = req.body; 
 
  client.query(`
    INSERT INTO dog_table (name, breed, weight, isaAdopted, size_id) 
    VALUES($1, $2, $3, $4, $5)
    RETURNING id, 
    name, 
    breed, 
    weight, 
    isAdopted as "isAdopted", 
    size_id as "sizeId";
    `,
  [body.name, body.breed, body.weight, body.isAdopted, body.sizeId])
    .then(result => {
      res.json(result.rows[0]); 
    });
});
app.put('/api/dog_picker/:id', (req, res) => {
  const body = req.body;

    client.query(`
    UPDATE dog_table
    SET 
      name = $1,
      breed = $2,
      weight = $3,
      isaAdopted = $4
    WHERE id = $5
    RETURNING 
      id, 
      name,
      breed,
      weight, 
      isAdopted as "isAdopted", 
      size_id as "sizeId";
    `, 
    [body.name, body.breed, body.weight, body.isAdopted, body.id])
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