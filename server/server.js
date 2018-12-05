ress = require('express');
const app = express();
const shortid = require('shortid');

const fs = require('fs');

function readData() {
  // we don't normally use sync, but fine for today
  const data = fs.readFileSync('./data/islands.json', 'utf8');
  return JSON.parse(data);
}

function saveData(islands) {
  const json = JSON.stringify(islands, true, 2);
  fs.writeFileSync('./data/islands.json', json);
}
/* end database stuff */

//  json "middleware"
app.use(express.json());

app.get('/api/islands', (req, res) => {
  const islands = readData();

  // do we have a name query param?
  if(req.query.name) {
    // filter islands that start with name
    const match = req.query.name.toLowerCase();
    const filtered = islands.filter(s => {
      return s.name.toLowerCase().startsWith(match);
    });
    res.json(filtered);
  }
  else {
    // send back all islands
    res.json(islands);
  }
});

app.post('/api/islands', (req, res) => {

  const islands = readData();
  const island = req.body;
  island.id = shortid.generate();
  // island.created = new Date();
  islands.push(island);
  saveData(islands);

  res.json(island);
});

/* end defined routes */

/* configure and start the server */
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});

/* end configure and server start */