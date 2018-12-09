const express = require('express');
const Router = express.Router;
const router = Router();
const client = require('../../db-client');

router
  .get('/', (req, res) => {
    client.query(`
      SELECT id, genre, short_name as "shortName"
      FROM genre;
    `)
      .then(result => { 
        res.json(result.rows);
      });
  });

module.exports = router;