const fs = require('fs');
const x = 12;
const y = 13;
console.log('i am js running in node', x + y);
fs.writeFileSync('hello.txt', 'i am some text');