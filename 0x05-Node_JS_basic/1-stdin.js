process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const userName = process.stdin.read();
  process.stdout.write(`Your name is: ${userName}`);
  process.exit();
});
