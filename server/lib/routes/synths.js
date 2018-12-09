const client = require('../../db-client');
const Router = require('express').Router;
const router = Router(); // eslint-disable-line new-cap

router
  .get('/', (req, res) => {
    client.query(`
      SELECT 
        id, 
        name,
        image,
        polyphonic,
        year,
        manufacturer_id as "manufacturerId"
      FROM synths
      ORDER BY id;
    `)
      .then(result => {
        res.json(result.rows);
      });
  })

  .get('/:id', (req, res) => {
    client.query(`
    SELECT
      id, 
      name,
      image,
      polyphonic,
      year,
      manufacturer_id as "manufacturerId"
    FROM synths 
    WHERE id = $1;
  `,
    [req.params.id])
      .then(result => {
        res.json(result.rows[0]);
      });
  })

  .delete('/:id', (req, res) => {
    client.query(`
    DELETE FROM synths WHERE id = $1;
  `,
    [req.params.id])
      .then(result => {
        res.json({ removed: result.rowCount === 1 });
      });
  })

  .post('/', (req, res) => {
    const body = req.body;
    client.query(`
    INSERT INTO synths (name, manufacturer_id, image, polyphonic, year)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING
      id, 
      name,
      image,
      polyphonic,
      year,
      manufacturer_id as "manufacturerId";
  `,
    [body.name, body.manufacturerId, body.image, body.polyphonic, body.year])
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;