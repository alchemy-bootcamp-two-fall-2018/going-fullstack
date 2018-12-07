
const app = require('./lib/app');

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app was started on port', PORT);
});