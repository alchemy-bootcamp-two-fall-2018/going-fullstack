const express = require('express');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap
const client = require('../../db-client');

const getShortName = n => n
  .toLowerCase()
  .slice(0, 8)
  .trim()
  .replace(/[^a-z]/ig, '-');


/* Defined routes: METHOD, URL PATH */
// method == app.<method>
// path = app.get('/this/is/path', ...)

router
  .get('/', (req, res) => {
    client.query(`
      SELECT id, name, short_name as "shortName"
      FROM genres
      ORDER BY name;
    `)
      .then(result => {
        res.json(result.rows);
      });
  })

  .post('/', (req, res) => {
    const body = req.body;

    client.query(`
      INSERT INTO genres (name, short_name)
      VALUES ($1, $2)
      RETURNING id, name, short_name as "shortName";
    `,
    [body.name, getShortName(body.name)]
    )
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;