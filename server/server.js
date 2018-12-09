const express = require('express');
const app = express();
const morgan = require('morgan');
const books = require('./lib/routes/books');
const client = require('./db-client');

//enhanced logging
app.use(morgan('dev'));

//register the json "middleware" body parser
app.use(express.json());

/* defined routes: METHOD, URLPATH */



app.get('/api/genres', (req, res) => {
  client.query(`
    SELECT id, genre, short_name as "shortName"
    FROM genre
    ORDER BY genre;  
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.use(books);
/* end defined routes*/

/* configure and start the server */

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});
/* end configure and server start */