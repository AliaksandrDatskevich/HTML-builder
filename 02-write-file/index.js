const fs = require('fs');
const path = require('path');
const { stdout } = process;
const readline = require( 'node:readline' );
const {
  stdin: input,
  stdout: output,
} = require( 'node:process' );
const rl = readline.createInterface({ input, output });

fs.writeFile(
  path.join(__dirname, 'text.txt'),
  '',
  (err) => {
    if (err) throw err;
  }
);
stdout.write(`Hi!\nFile created.\n`);

rl.question('Enter text:\n', (answer) => {
  if (input === 'exit') {
    rl.close();
  } else {
    fs.writeFile(
      path.join(__dirname, 'text.txt'),
      `${answer}\n`,
      (err) => {
        if (err) throw err;
      }
    );
    stdout.write(`Added text: ${answer}\n`);
  }

  rl.on('line', (input => {
    if (input === 'exit') {
      rl.close();
    } else {
      fs.appendFile(
        path.join(__dirname, 'text.txt'),
        `${input}\n`,
        (err) => {
          if (err) throw err;
          stdout.write(`Added text: ${input}\n`);
        }
      );
    }
  }));

});

rl.on('close', (input) => {
  stdout.write('See you soon!');
  process.exit(0);
})
