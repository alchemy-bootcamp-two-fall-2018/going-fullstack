const client = require('../../db-client');
const Router = require('express').Router;
const router = Router(); // eslint-disable-line new-cap

router
  .get('/', (req, res) => {
    client.query(`
    SELECT id, name, short_name as "shortName"
    FROM manufacturer
    ORDER BY name;
  `)
      .then(result => {
        res.json(result.rows);
      });
  });

module.exports = router;