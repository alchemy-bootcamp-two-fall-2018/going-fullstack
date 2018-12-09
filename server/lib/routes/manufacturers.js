const express = require('express');
const client = require('../../db-client');
const Router = express.Router;
const router = Router(); // eslint-disable-line new-cap

router
  .get('/api/manufacturers', (req, res) => {
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