const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socket_io = require('socket.io')(server);

const cors = require('cors');
const PORT = process.env.PORT || 3333;
const routes = require('./router');

const {
  addUser,
  getUser,
  getUsersInRoom,
  removeUser
} = require('./utils/users');

app.use(cors());
app.use(express.json());

socket_io.on('connection', socket => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.emit('message', {
      user: 'admin',
      text: `${user.name}, welcome to the room ${user.room}.`
    });

    socket.broadcast
      .to(user.room)
      .emit('message', { user: 'admin', text: `${user.name}, has joined.` });

    socket_io
      .to(user.room)
      .emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    socket.join(user.room);

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    socket_io.to(user.room).emit('message', { user: user.name, text: message });
    socket_io
      .to(user.room)
      .emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      socket_io.to(user.room).emit('message', {
        user: 'admin',
        text: `${user.name} has left`
      });
    }
  });
});

app.use(routes);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
