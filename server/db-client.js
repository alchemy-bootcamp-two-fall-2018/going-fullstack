// repeated code from script and server files 

const pg = require('pg');
const Client = pg.Client;
const dataBaseUrl = 'postgres://localhost:5432/champions';
const client = new Client(dataBaseUrl);

// call and connect to DB
client.connect()
// log success/failure to connect
    .then(() => console.log('connected to DataBase from DB-client', dataBaseUrl))
    .catch(err => console.error('connection error', err));
// listen for errors on the connection 

client.on('error', err => {
    console.error('\n**** DATABASE ERROR ****\n\n', err);
});


module.exports = client;
