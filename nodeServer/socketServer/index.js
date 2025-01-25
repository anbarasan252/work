// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve the static files (HTML, CSS, JS) from the "public" folder
app.use(express.static('public'));

// Listen for incoming connections from clients
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for chat messages and broadcast them to all clients
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
