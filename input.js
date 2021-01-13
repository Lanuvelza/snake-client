const stdin = process.stdin;

// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
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
    } else if (key === 'w') {
      connection.write("Move: up"); 
    } else if (key === "a") {
      connection.write("Move: left")
    } else if (key === "d") {
      connection.write("Move: right");
    } else if (key === "s") {
      connection.write("Move: down");
    } else if (key === "p") {
      connection.write("Say: POGGERS");
    }
  });
}



module.exports = { setupInput };