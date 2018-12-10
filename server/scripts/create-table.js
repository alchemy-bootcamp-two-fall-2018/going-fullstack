const client = require('../db-client.js');
client.query(`
    CREATE TABLE IF NOT EXISTS pref (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        short_name VARCHAR(6) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS grapplers (
        id SERIAL PRIMARY KEY, 
        name VARCHAR(256) NOT NULL, 
        age INTEGER,
        champ BOOLEAN, 
        pref_id INTEGER NOT NULL REFERENCES pref(id)
        );

        `)
    .then(console.log('Both new tables has been created'), 
        err => console.log(err)
    )
    .then(() =>{
        client.end();
    });