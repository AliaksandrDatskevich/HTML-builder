const fs = require('fs');
const path = require('path');
const { stdout } = process;

fs.readdir(
  path.join(__dirname, 'secret-folder'),
  { withFileTypes: true },
  (err, files) => {
  console.log("\nCurrent directory files:");
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      // console.log(file);
      fs.stat(
        path.join(__dirname, 'secret-folder', file.name), 
        (err, stats) => {
          if (err)
          console.log(err);
          else {      
            // console.log(stats.size);
            if (stats.isFile()) {
              stdout.write(path.basename(file.name, path.extname(file.name)));
              stdout.write(' - ');
              stdout.write(path.extname(file.name).replace('.', ''));
              stdout.write(' - ');
              stdout.write(String(stats.size));
              stdout.write('b');
              stdout.write('\n');
            }
          }
        }
      )
    })
  }
})
