const fs = require('fs');
const path = require('path');

fs.readFile(
  // 'text.txt',
  path.join(__dirname, 'text.txt'),
  'utf8',
  (err, data) => {
    console.log(data);
  }
);