import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useLocation, useHistory } from 'react-router-dom';

import InfoBar from '../../Components/InfoBar/InfoBar';
import Input from '../../Components/Input/Input';
import Messages from '../../Components/Messages/Messages';
import UsersInRoom from '../../Components/UsersInRoom/UsersInRoom';

import io from 'socket.io-client';
const ENDPOINT = 'localhost:3333';
let socket;

export default function Chat() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [usersInRoom, setUsersInRoom] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    setName(name);
    setRoom(room);

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

  return (
    <div>
      <InfoBar room={room} />
      <Messages messages={messages} name={name} />
      <Input
        message={message}
        setMessage={setMessage}
        sendMessages={sendMessages}
      />
      <UsersInRoom usersInRoom={usersInRoom} />
    </div>
  );
}
