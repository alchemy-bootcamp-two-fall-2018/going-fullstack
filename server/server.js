const express = require('express'); 
const app = express(); 
const shortid = require('shortid'); 

const fs = require('fs'); 

function readData() {
  const data = fs.readFileSync('./data/dogs.json', 'utf8'); 
  return JSON.parse(data);
}

function saveData(dogs) {
  const json = JSON.stringify(dogs, true, 2);
  fs.writeFileSync('./data/dogs.json', json);
}

app.use(express.json()); 

app.get('/api/dogs', (req, res) => {
  const dogs = readData(); 

  if(req.query.name) {
    const match = req.query.name.toLowerCase(); 
    const filtered = dogs.filter(d => {
      return d.name.toLowerCase().startsWith(match); 
    }); 
    res.json(filtered); 
  }
  else {
    res.json(dogs); 
  }
});

app.post('/api/dogs', (req, res) => {
  const dogs = readData();
  const dog = req.body; 
  dog.id = shortid.generate(); 
  dogs.push(dog); 
  saveData(dogs);

  res.json(dog);

});

const PORT = 3000; 

app.listen(PORT, () => {
  console.log('server app started on port', PORT); 
}); 