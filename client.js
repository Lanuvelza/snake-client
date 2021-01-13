const net = require('net');
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });

  // print a message to the screen when the connection is successfully established 
  // send a name which we will assign the snake 
  conn.on('connect', () => {
    console.log("connection is successfully established");
    conn.write("Name: ILM"); 
    // conn.write("Move: up");
    // conn.write("Move: down");
    // conn.write("Move: left");
    // conn.write("Move: right");
   
    // conn.on('connect', () => {
    //   conn.write("Move: up");
    //   conn.on('connect', () => {
    //     conn.write("Move: down");
    //     conn.on('connect', () => {
    //       conn.write("Move: left");
    //       conn.on('connect', () => {
    //         conn.write("Move: right");
    //       });
    //     });
    //   });
    // });
  }); 

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log("Message from server: ", data);
  });

  return conn;
}

module.exports =  { connect }; 