const express = require('express');
const app = express();
const morgan = require('morgan');
const client = require('./db-client');

app.use(morgan('dev'));
app.use(express.json());

app.get('/api/teams', (req, res) => {
  client.query (`
    SELECT id, name, short_name as "shortName"
    FROM team
    Order BY name;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/racers', (req, res) => {
  client.query(`
    SELECT 
      racer.id, 
      racer.name AS name,
      racer.age AS age,
      team.id AS "teamId",
      team.name AS team,
      racer.pr AS pr
    FROM racer
    JOIN team
    ON racer.team_id = team.id;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/racers/:id', (req, res) => {
  client.query(`
  SELECT 
    racer.id, 
    racer.name AS name,
    racer.age AS age,
    team.id AS "teamId",
    team.name AS team,
    racer.pr AS pr
  FROM racer
  JOIN team
  ON racer.team_id = team.id
  WHERE racer.id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/racers', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO racer (name, age, team_id, pr )
    VALUES($1, $2, $3, $4)
    RETURNING *;
  `,
  [body.name, body.age, body.teamId, body.pr])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.put('/api/racers/:id', (req, res) => {
  const body = req.body;
  client.query(`
    UPDATE racer
    SET 
      name = $1, 
      age = $2, 
      team_id = $3, 
      pr = $4
    WHERE id = $5
    RETURNING *;
  `,
  [body.name, body.age, body.teamId, body.pr])
    .then(result => {
      res.json(result.rows[0]);
    });
});
 
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server running on', PORT);
});


