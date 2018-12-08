const express = require('express');
const app = express();
const morgan = require('morgan');
const client = require('./db-client');

app.use(morgan('dev'));

app.use(express.json());

app.get('/api/manufacturers', (req, res) => {
  client.query(`
    SELECT id, name, short_name as "shortName"
    FROM manufacturer
    ORDER BY name;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/synths', (req, res) => {
  client.query(`
    SELECT 
      synths.id, 
      synths.name as name,
      synths.image as image,
      synths.polyphonic as polyphonic,
      synths.year as year,
      manufacturer.id as "manufacturerId",
      manufacturer.name as manufacturer
    FROM synths
    JOIN manufacturer
    ON synths.manufacturer_id = manufacturer.id
    ORDER BY year ASC;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/synths/:id', (req, res) => {
  client.query(`
    SELECT * FROM synths WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.delete('/api/synths/:id', (req, res) => {
  client.query(`
    DELETE FROM synths WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      // console.log(result);
      res.json({ removed: result.rowCount === 1 });
      // res.json(result.rows[0]);
    });
});

app.post('/api/synths', (req, res) => {
  const body = req.body;
  client.query(`
    INSERT INTO synths (name, manufacturer_id, image, polyphonic, year)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id;
  `,
  [body.name, body.manufacturerId, body.image, body.polyphonic, body.year])
    .then(result => {
      const id = result.rows[0].id;

      return client.query(`
      SELECT 
        synths.id, 
        synths.name as name,
        synths.image as image,
        synths.polyphonic as polyphonic,
        synths.year as year,
        manufacturer.id as "manufacturerId"
      FROM synths
      JOIN manufacturer
      ON synths.manufacturer_id = manufacturer.id
      WHERE synths.id = $1;
  `,
      [id]);
    })
    .then(result => {
      res.json(result.rows[0]);
    });
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});