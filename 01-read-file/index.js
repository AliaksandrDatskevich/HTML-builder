const fs = require('fs');
const path = require('path');

const readStream = fs.createReadStream(
  // 'text.txt',
  path.join(__dirname, 'text.txt'),
  'utf8',  
);

readStream.on('data', (data) => {
  console.log(data);
});