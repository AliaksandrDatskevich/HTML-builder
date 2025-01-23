const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'text.txt');
const { stdout } = process;
const readline = require('node:readline');
const { stdin, stdout: output } = process;

fs.writeFile(filePath, '', (err) => {
  if (err) throw err;
  stdout.write(`Hi!\nFile created.\n`);

  const rl = readline.createInterface({ input: stdin, output });

  rl.question('Enter text:\n', (answer) => {
    if (answer.trim().toLowerCase() === 'exit') {
      rl.close();
      return;
    } else {
      fs.writeFile(filePath, `${answer}\n`, (err) => {
        if (err) throw err;
        stdout.write(`Added text: ${answer}\n`);
      });
    }

    rl.on('line', (line) => {
      if (line.trim().toLowerCase() === 'exit') {
        rl.close();
        return;
      } else {
        fs.appendFile(filePath, `${line}\n`, (err) => {
          if (err) throw err;
          stdout.write(`Added text: ${line}\n`);
        });
      }
    });
  });

  rl.on('close', () => {
    stdout.write('See you soon!\n');
    process.exit(0);
  });
});