const express = require('express');
const app = express();
const morgan = require('morgan');
const client = require('./db-client');

app.use(morgan('dev'));

app.use(express.json());

app.get('/api/synths', (req, res) => {
  client.query(`
      SELECT name, image, polyphonic, year, id FROM synths;
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
    INSERT INTO synths (name, image, polyphonic, year)
    VALUES ($1, $2, $3, $4)
    RETURNING name, image, polyphonic, year, id;
  `,
  [body.name, body.image, body.polyphonic, body.year])
    .then(result => {
      res.json(result.rows[0]);
    });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});