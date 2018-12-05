const pg = require('pg');
const client = pg.Client;
const databaseUrl = 'postgres://postgres:1234@localhost:5432/nonprofits';

const client = new Client(databaseUrl);

client.connect()
    .then(() => {
        return client.query(`
            CREATE TABLE IF NOT EXISTS nonprofits (
                is 
            )
        `)
    })