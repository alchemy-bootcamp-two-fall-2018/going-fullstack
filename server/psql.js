const fs = require('fs');

const pg = require('pg');

const Client = pg.Client;

const databaseUrl = 'postgres://localhost:5432/news_articles';

const client = new Client(databaseUrl);

client.connect();

client.query(`
  SELECT id, title, author, views FROM articles;
`)
  .then(
    results => {
      fs.writeFileSync(
        'student.json',
        JSON.stringify(results.rows, true, 2)
      );
    },
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });