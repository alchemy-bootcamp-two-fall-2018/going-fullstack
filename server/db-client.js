const pg = require('pg');
// Use the pg Client
const Client = pg.Client;
// database url
const DATABASE_URL = 'postgres://localhost:5432/rockstars';
// on windows, linux, or other systems where you need to 
// specify username and password
// const databaseUrl = 'postgres://<username>:<password>@localhost:5432/liveable_cities';

const client = new Client(DATABASE_URL);

// call connect
client.connect()
  // provide success/failure log based on connection working
  .then(() => console.log('connected to db', DATABASE_URL))
  .catch(err => console.error('connection error', err));

// listen for errors on the connection and log them
client.on('error', err => {
  console.error('\n**** DATABASE ERROR ****\n\n', err);
});

// export so other modules (files) can use
module.exports = client;