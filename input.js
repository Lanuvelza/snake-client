const stdin = process.stdin;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(); 
  return stdin;
}

const handleUserInput = function() {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
}

module.exports = { setupInput };