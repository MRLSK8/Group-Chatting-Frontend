const users = [];

const trimAndLowerCase = require('./TrimAndLowerCaseString');

const checkIfUserExist = ({ name, room }) => {
  const trimmedRoom = trimAndLowerCase(room);
  const trimmedName = trimAndLowerCase(name);

  const existingUser = users.find(
    (user) =>
      trimAndLowerCase(user.room) === trimmedRoom &&
      trimAndLowerCase(user.name) === trimmedName
  );

  if (existingUser) {
    return { error: 'This username is already taken!' };
  }
};

const addUser = ({ id, name, room, gender }) => {
  const user = { id, name, room, gender };

  users.push(user);

  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = {
  checkIfUserExist,
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
