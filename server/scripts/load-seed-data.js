const client = require('../db-client.js');
const prefs = require('../scripts/pref');
const grapplers = require('./grapplers.json');

Promise.all(
    prefs.map(pref => {
        return client.query(`
        INSERT INTO pref (name, short_name)
        VALUES ($1, $2);
        `,
        [pref.name, pref.shortName]);
    })
)
    .then(() => {
        return Promise.all(
            grapplers.map(grappler => {
                return client.query (`
                INSERT INTO grapplers (name, age, champ, pref_id)
                SELECT
                    $1 as name, 
                    $2 as age, 
                    $3 as champ,
                    id as pref_id
                FROM pref 
                WHERE short_name = $4;
                `,
                [grappler.name, grappler.age, grappler.champ, grappler.pref]);
            })
        );
    })
    .then(
        () => console.log('seed data load complete'), 
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });