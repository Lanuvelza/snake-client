const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });

  // print a message to the screen when the connection is successfully established 
  // send a name which we will assign the snake 
  conn.on('connect', () => {
    console.log("connection is successfully established");
    conn.write("Name: ILM"); 
  }); 

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log("Message from server: ", data);
  });

  return conn;
}

module.exports =  { connect }; 