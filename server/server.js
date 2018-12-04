const express = require('express'); 
const app = express(); 
const shortid = require('shortid'); 

const fs = require('fs'); 

function readData() {
  const data = fs.readFileSync('./data/dogs.json', 'utf8'); 
  return JSON.parse(data);
}

app.use(express.json()); 

app.get('/api/dogs', (req, res) => {
  const dogs = readData(); 
  res.json(dogs); 
});

app.post('/api/dogs', (req, res) => {
  const dogs = readData();
  const dog = req.body; 
  dog.id = shortid.generate(); 
  dogs.push(dog); 
  // saveData(dogs);

  res.json(dog);

});

const PORT = 3000; 

app.listen(PORT, () => {
  console.log('server app started on port', PORT); 
}); 