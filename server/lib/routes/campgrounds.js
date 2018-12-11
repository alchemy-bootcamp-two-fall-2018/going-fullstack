const express = require('express');
const client = require('../../db-client');
const Router = express.Router;
const router = Router();

router
  .get('/', (req, res) => {
    client.query(`
      SELECT id, name, forest, sites, rvwaste
      FROM campgrounds
      ORDER BY name;
    `)
      .then(result => {
        res.json(result.rows[0]);
      });
  })

  .get('/:id', (req, res) => {
    client.query(`
      SELECT * FROM campgrounds WHERE id = $1;
    `,
    [req.params.id])
      .then(result => {
        res.json(result.rows[0]);
      });
  })

  .post('/', (req, res) => {
    const body = req.body;

    client.query(`
      INSERT INTO campgrounds (name, forest, sites, rvwaste)
      VALUES($1, $2, $3, $4)
      RETURNING id, name, forest, sites, rvwaste;
    `,
    [body.name, body.forest, body.sites, body.rvwaste])
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;