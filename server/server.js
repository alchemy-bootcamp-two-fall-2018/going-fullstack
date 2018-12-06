const express = require('express');
const app = express();
const morgan = require('morgan');
const pg = require('pg');

app.use(morgan('dev'));
app.use(express.json());

const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/crosscountry';
const client = new Client(dbUrl);
client.connect();

// function readData() {
//   const data = fs.readFileSync('./data/racers.json', 'utf8');
//   return JSON.parse(data);
// }

// function saveData(racers) {
//   const json = JSON.stringify(racers, true, 2);
//   fs.writeFileSync('./data/racers.json', json);
// }


app.get('/api/racers', (req, res) => {
  // const racers = readData();

  client.query(`
    SELECT id, name
    FROM racers;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.post('/api/racers', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO racers (name, age, gender, varsity, pr )
    VALUES($1, $2, $3, $4, $5)
    RETURNING *;
  `,
  [body.name, body.age, body.gender, body.varsity, body.pr])
    .then(result => {
      res.json(result.rows[0]);
    });
});
 
const PORT = 3000;

app.listen(PORT, () => {
});


