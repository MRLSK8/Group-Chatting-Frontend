import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import InfoBar from '../../Components/InfoBar/InfoBar';
import Input from '../../Components/Input/Input';
import Messages from '../../Components/Messages/Messages';

/* Socket.io */
import io from 'socket.io-client';
let socket;

export default function Chat() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const ENDPOINT = 'localhost:3333';
  const location = useLocation();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    setName(name);
    setRoom(room);

    socket = io(ENDPOINT);

    socket.emit('join', { name, room }, () => {});

    return () => {
      socket.emit('disconnect');
      socket.close();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages([...messages, message]);
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
    </div>
  );
}
