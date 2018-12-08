
const client = require ('../db-client');
const articles = require('./articles.json');
const categories = require('./categories');

Promise.all(
  categories.map(category => {
    return client.query(`
      INSERT INTO article_category_table (name, short_name)
      VALUES ($1, $2);
    `,
    [category.name, category.shortName]);
  })
)
  .then(() => {
    return Promise.all(
      articles.map(article => {
        return client.query(`
          INSERT INTO article (title, author_id, views, is_clickbait)
          SELECT
            $1 as title,
            id as author_id,
            $2 as views,
            $3 as is_clickbait
          FROM article_category_table
          WHERE short_name = $4;
        `,
        [article.title, article.views, article.isClickbait, article.category]);
      })
    );
  })
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });