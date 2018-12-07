const express = require('express');
const app = express();
const morgan = require('morgan');
const client = require('../server/db-client');
//morgan logging 
app.use(morgan('dev'));

//use the express framework for this file 
app.use(express.json());


// start defining the REQUEST and RESPONSE methods
// get all the data and convert it into useable JS text aka from JSON to normal stuff
app.get('/api/scripts/pref', (req, res) => {
    client.query(`
    SELECT id, name, short_name as "shortName
    FROM pref`)
        .then (result => {
            res.json(result.rows);
        });
});

app.get('/api/data/grapplers', (req, res) => {
    client.query(`
    SELECT grapplers.id, grapplers.name, grapplers.age, grapplers.champ FROM grapplers
    JOIN pref
    ON grapplers.pref_id = pref.id
    `)
        .then(result => {
            res.json(result.rows);
        });
});

app.get('/api/data/grapplers/:id', (req, res) => {
    client.query(` 
    
    SELECT * FROM grapplers WHERE id = $1;`, 
    [req.params.id])
        .then(result => {
            res.json(result.rows[0]);
        });
});

app.post('/api/data/grapplers', (req, res) => {
    const body = req.body;
    client.query (`
    INSERT INTO grapplers (name, age, champ, pref_id)
    VALUES($1, $2, $3, $4)
    RETURNING id, name, age, champ;`,
    [body.name, body.age, body.champ, body.prefId])
        .then(result => {
            const id = result.rows[0].id;
            return client.query(`
                SELECT
                    grapplers.id,

                    grapplers.name as 

                    name,
                    grapplers.age as age,

                    grapplers.champ as 
                    
                    champ,
                    pref.id as "prefId",
                    pref.name as pref
                FROM grapplers
                JOIN pref
                ON grapplers.pref_id = pref.id
                WHERE grapplers.id = $1;
             `,
            [id]);
        })
        .then(result => {
            res.json(result.rows[0]);
        });
});
// set place for port to be used 

const PORT = 3000;

app.listen(PORT, () => {
    console.log('server app started on PORT', PORT);
});
