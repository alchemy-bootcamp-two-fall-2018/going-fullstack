const express = require('express');
const Router = express.Router;
const router = Router();
const client = require('../../db-client');

const getShortName = n => n
  .toLowerCase()
  .slice(0, 8)
  .trim()
  .replace(/[^a-z]/ig, '-');

router
  .get('/', (req, res) => {
    client.query(`
      SELECT id, genre, short_name as "shortName"
      FROM genre;
    `)
      .then(result => { 
        res.json(result.rows);
      });
  })
  
  .post('/', (req, res) => {
    const body = req.body;

    client.query(`
      INSERT INTO genre (genre, "shortName")
      VALUES ($1, $2)
      RETURNING id, genre, short_name as "shortName";
    `, 
    [body.genre, getShortName(body.genre)]
    )
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;