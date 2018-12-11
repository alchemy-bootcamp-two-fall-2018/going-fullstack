const express = require('express');
const Router = express.Router;
const router = Router();
const client = require('../../db-client');

router
  .get('/', (req, res) => {
    client.query(`
      SELECT id, name, forest, sites, rvwaste
      FROM campgrounds;
    `)
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;