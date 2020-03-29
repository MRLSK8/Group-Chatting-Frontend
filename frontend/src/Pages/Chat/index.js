import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import socket from '../../services/socket.io';

// import { Container } from './styles';

export default function Chat() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const location = useLocation();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {});

    return () => {
      socket.emit('disconnect');
      socket.off();
      console.log('test');
    };
  }, [location.search]);

  return <h1>Chat</h1>;
}
