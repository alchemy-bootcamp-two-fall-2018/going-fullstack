const express = require('express');
const app = express();
const morgan = require('morgan');
const pg = require('pg');

app.use(morgan('dev'));
app.use(express.json());

const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/crosscountry';
const client = new Client(databaseUrl);

// function readData() {
//   const data = fs.readFileSync('./data/racers.json', 'utf8');
//   return JSON.parse(data);
// }

// function saveData(racers) {
//   const json = JSON.stringify(racers, true, 2);
//   fs.writeFileSync('./data/racers.json', json);
// }


app.get('/api/racers', (req, res) => {
  const racers = readData();
  if(req.query.name) {
    const match = req.query.name;
    const filtered = racers.filter(racer => racer.name.startsWith(match));
    res.json(filtered);
  }
  else {
    res.json(racers);
  }
});


app.post('/api/racers', (req, res) => {
  const racers = readData();
  const racer = req.body;

  racers.push(racer);
  saveData(racers);
  res.json(racer);
});
 
const PORT = 3000;

app.listen(PORT, () => {
});


