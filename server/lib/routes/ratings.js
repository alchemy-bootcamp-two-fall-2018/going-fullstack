const express = require('express');
const Router = express.Router;
const router = Router();
const client = require('../../db-client');

router.get('/', (req, res) => {
  client.query(`
    SELECT id, name, short_name as "shortName" 
    FROM rating
    ORDER BY name;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

module.exports = router;