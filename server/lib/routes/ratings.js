const express = require('express');
const Router = express.Router;
const router = Router();
const client = require('../../db-client');

post('/', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO rating (name, short_name)
    VALUES ($1, $2)
    RETURNING id, name, short_name as "shortName";
  `,
  [body.name, getShortName(body.name)]
  )
    .then(result => {
      res.json(result.rows[0]);
    });
});
