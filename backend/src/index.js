const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socket_io = require('socket.io')(server);

const cors = require('cors');
const PORT = process.env.PORT || 3333;
const routes = require('./router');

app.use(cors());
app.use(express.json());

socket_io.on('connection', socket => {
  console.log('We have a new connection!');

  socket.on('join', ({ name, room }, callback) => {
    console.log(name, room);
  });

  socket.on('disconnect', () => {
    console.log('User has left!');
  });
});

app.use(routes);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
