import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useLocation, useHistory } from 'react-router-dom';

import InfoBar from '../../Components/InfoBar/InfoBar';
import Input from '../../Components/Input/Input';
import Messages from '../../Components/Messages/Messages';
import UsersInRoom from '../../Components/UsersInRoom/UsersInRoom';

import MyContext from '../../Contexts/Context';

import io from 'socket.io-client';
const ENDPOINT = 'localhost:3333';
let socket;

export default function Chat() {
  const [usersInRoom, setUsersInRoom] = useState([]);
  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    setUserName(name);
    setRoomName(room);

    socket = io(ENDPOINT);

    socket.emit('join', { name, room }, error => {
      if (error) {
        history.push('/');
        alert(error);
      }
    });

    socket.on('roomData', users => {
      setUsersInRoom(users);
    });

    return () => {
      socket.emit('disconnect');
      socket.disconnect();
    };
  }, [history, location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages([...messages, message]);
    });

    socket.on('roomData', users => {
      setUsersInRoom(users);
    });
  }, [messages]);

  const sendMessages = event => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  const allData = {
    messages,
    message,
    userName,
    roomName,
    sendMessages,
    setMessage,
    usersInRoom
  };

  return (
    <MyContext.Provider value={allData}>
      <InfoBar />
      <Messages />
      <Input />
      <UsersInRoom />
    </MyContext.Provider>
  );
}
