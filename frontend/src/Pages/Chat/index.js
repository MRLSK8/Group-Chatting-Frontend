import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import socket from '../../Services/socket.io';

import InfoBar from '../../Components/InfoBar/InfoBar';
import Input from '../../Components/Input/Input';

// import { Container } from './styles';

export default function Chat() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const location = useLocation();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {});

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [location.search]);

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
      <Input
        message={message}
        setMessage={setMessage}
        sendMessages={sendMessages}
      />
    </div>
  );
}
