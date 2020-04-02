import React, { useState, useEffect, useReducer } from 'react';
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

const INITIAL_STATE = {
  usersInRoom: [],
  messages: [],
  userName: '',
  roomName: '',
  message: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'USERNAME_AND_ROOM':
      return {
        ...state,
        userName: action.payload.userName,
        roomName: action.payload.roomName
      };
    case 'USERS_IN_ROOM':
      return { ...state, usersInRoom: action.payload.usersInRoom };
    case 'MESSAGE':
      return { ...state, message: action.payload.message };
    case 'MESSAGES':
      return { ...state, messages: action.payload.messages };
    default:
      return state;
  }
};

export default function Chat() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    dispatch({
      type: 'USERNAME_AND_ROOM',
      payload: { userName: name, roomName: room }
    });

    socket = io(ENDPOINT);

    socket.emit('join', { name, room }, error => {
      if (error) {
        history.push('/');
        alert(error);
      }
    });

    socket.on('roomData', users => {
      dispatch({ type: 'USERS_IN_ROOM', payload: { usersInRoom: users } });
    });

    return () => {
      socket.emit('disconnect');
      socket.disconnect();
    };
  }, [history, location.search]);

  useEffect(() => {
    socket.on('message', message => {
      dispatch({
        type: 'MESSAGES',
        payload: { messages: [...state.messages, message] }
      });
    });

    socket.on('roomData', users => {
      dispatch({ type: 'USERS_IN_ROOM', payload: { usersInRoom: users } });
    });
  }, [state.messages]);

  const sendMessages = event => {
    event.preventDefault();

    if (state.message) {
      socket.emit('sendMessage', state.message, () =>
        dispatch({ type: 'MESSAGE', payload: { message: '' } })
      );
    }
  };

  const allData = {
    userName: state.userName,
    roomName: state.roomName,
    usersInRoom: state.usersInRoom,
    messages: state.messages,
    message: state.message,
    sendMessages,
    dispatch
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
