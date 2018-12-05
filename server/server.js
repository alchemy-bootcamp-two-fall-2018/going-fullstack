const express = require('express');
const app = express();
// const shortid = require('shortid');

const fs = require('fs');

function readData() {
  const data = fs.readFileSync('./data/racers.json', 'utf8');
  return JSON.parse(data);
}

app.use(express.json());

app.get('/api/racers', (req, res) => {
  const racers = readData();
  res.json(racers);
});

// app.post('/api/racers', (req, res))

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});


