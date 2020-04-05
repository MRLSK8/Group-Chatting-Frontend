import React, { useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';

import InfoBar from '../../Components/InfoBar/InfoBar';
import Input from '../../Components/Input/Input';
import Messages from '../../Components/Messages/Messages';
import UsersInRoom from '../../Components/UsersInRoom/UsersInRoom';

import MyContext from '../../Contexts/Context';

import io from '../../services/io';

const INITIAL_STATE = {
  usersInRoom: [],
  messages: [],
  userName: '',
  roomName: '',
  message: '',
  gender: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'USERNAME_AND_ROOM':
      return {
        ...state,
        userName: action.payload.userName,
        roomName: action.payload.roomName,
        gender: action.payload.gender,
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

  useEffect(() => {
    const { userName: name, roomName: room, Gender: gender } = location.state;

    dispatch({
      type: 'USERNAME_AND_ROOM',
      payload: { userName: name, roomName: room, gender },
    });

    io.emit('join', { name, room, gender }, () => {});

    io.on('roomData', (users) => {
      dispatch({ type: 'USERS_IN_ROOM', payload: { usersInRoom: users } });
    });

    return () => {
      io.emit('logout');
    };
  }, [location.state]);

  useEffect(() => {
    io.on('message', (message) => {
      dispatch({
        type: 'MESSAGES',
        payload: { messages: [...state.messages, message] },
      });
    });

    io.on('roomData', (users) => {
      dispatch({ type: 'USERS_IN_ROOM', payload: { usersInRoom: users } });
    });
  }, [state.messages]);

  const sendMessages = (event) => {
    event.preventDefault();

    if (state.message) {
      io.emit('sendMessage', state.message, () =>
        dispatch({ type: 'MESSAGE', payload: { message: '' } })
      );
    }
  };

  const allData = {
    userName: state.userName,
    roomName: state.roomName,
    gender: state.gender,
    usersInRoom: state.usersInRoom,
    messages: state.messages,
    message: state.message,
    sendMessages,
    dispatch,
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
