const express = require('express');
const app = express();
const shortid = require('shortid');

const fs = require('fs');

function readData() {
  const data = fs.readFileSync('./data/islands.json', 'utf8');
  return JSON.parse(data);
}

function saveData(islands) {
  const json = JSON.stringify(islands, true, 2);
  fs.writeFileSync('./data/islands.json', json);
}

app.use(morgan('dev'));

app.use(express.json());

app.get('/api/islands', (req, res) => {
  const islands = readData();
  if(req.query.name) {
    const match = req.query.name.toLowerCase();
    const filtered = islands.filter(s => {
      return s.name.toLowerCase().startsWith(match);
    });
    res.json(filtered);
  }
  else {
    res.json(islands);
  }

});

app.post('/api/islands', (req, res) => {

  const islands = readData();
  const island = req.body;
  island.id = shortid.generate();
  islands.push(island);
  saveData(islands);
  
  res.json(island);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app was started on port', PORT);
});