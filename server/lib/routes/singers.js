const express = require('express');
const client = require('../../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

/* Defined routes: METHOD, URL PATH */
// method == app.<method>
// path = app.get('/this/is/path', ...)

router
  .get('/', (req, res) => {
    client.query(`
      SELECT
        singers.id,
        singers.name as name,
        singers.age,
        singers.summary,
        genres.id as genre_id,
        genres.name as genre
      FROM singers
      JOIN genres
      ON singers.genre_id = genres.id
      ORDER BY singers.name ASC;
    `)
      .then(result => {
        res.json(result.rows);
      });
  })
  
  .get('/:id', (req, res) => {
    client.query(`
      SELECT
      singers.id,
      singers.name as name,
      singers.age,
      singers.summary,
      genres.id as genre_id,
      genres.name as genre
      FROM singers
      JOIN genres
      ON singers.genre_id = genres.id
      WHERE singers.id = $1;
      `,
    [req.params.id])
      .then(result => {
        res.json(result.rows[0]);
      });
  })
  
  .post('/', (req, res) => {
    const body = req.body;
    
    client.query(`
        INSERT INTO singers (name, genre_id, age, summary)
        VALUES($1, $2, $3, $4)
        RETURNING id;
      `,
    [body.name, body.genreId, body.age, body.summary])
      .then(result => {
        const id = result.rows[0].id;
  
        return client.query(`
          SELECT
            singers.id,
            singers.name as name,
            singers.age as age,
            singers.summary as summary,
            genres.id as "genreId",
            genres.name as genre
            FROM singers
            JOIN genres
            ON singers.genre_id = genres.id
            WHERE singers.id = $1
        `,
        [id]);
      })
      .then(result => {
        res.json(result.rows[0]);
      });
  })
   
  .put('/:id', (req, res) => {
    const body = req.body;
    client.query(`
            UPDATE singers
            SET
              name = $1,
              genre_id = $2,
              age = $3,
              summary = $4
            WHERE id = $5
            RETURNING
              id,
              name,
              age,
              summary,
              genre_id as "genreId"       
        `,
    [body.name, body.genreId, body.age, body.summary, body.id])
      .then(result => {
        res.json(result.rows[0]);
      });
  })
 
  .delete('/:id', (req, res) => {
    res.json(req.params.id); 
    client.query(`
        DELETE from singers WHERE id = $1
    `,
    [req.params.id])
      .then(result => {
        res.json({ removed: result.rowCount === 1 });
      });
  });


module.exports = router;



