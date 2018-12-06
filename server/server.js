const express = require('express');
const app = express();
const pg = require('pg');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());

const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/islanddb';
const client = new Client(dbUrl);
client.connect();

app.get('/api/islands', (req, res) => {
  client.query(`
  SELECT id, name FROM islands;
`)
  .then(result => {
    res.json(result.rows);
  });
});

app.get('/api/islands/:id', (req, res) => {
 client.query(`
 SELECT * FROM islands WHERE id = $1;
 `,
 [req.params.id])
   .then(result => {
     res.json(result.rows[0]);
   });
});

app.post('/api/islands', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO islands (name, loca, image, is_amazing)
    VALUES($1, $2, $3, $4)
    RETURNING id, name, loca, image, is_amazing as "isAmazing";
  `,
  [body.name, body.loca, body.image, body.isAmazing])
    .then(result => {
      res.json(result.rows[0]);
    });
});

// app.post('/api/islands/delete', (req, res) => {
//   client.query(`
//     DELETE FROM islands WHERE id = $1
//   `,
//   [req.body.id]);
//   res.json();
// });

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app was started on port', PORT);
});