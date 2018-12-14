const pg = require('pg');

const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/characters';
const client = new Client(dbUrl);

client.connect()
  .then(() =>
    console.log('connected to database', dbUrl))
  .catch(err => 
    console.log('**** DATABASE ERROR **** ', err));

module.exports = client;

