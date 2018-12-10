const pg = require('pg'); 

const DATABASE_URL = 'postgres://localhost:5432/dog_picker';

const Client = pg.Client; 

const client = new Client(DATABASE_URL);

client.connect() 
  .then(() => (DATABASE_URL))
  .catch(err => (err));

client.on('error', err => {
  console.error('n**** DATABASE ERROR ****\n\n', err); 
});

module.exports = client;