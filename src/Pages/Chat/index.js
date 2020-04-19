import React, { useEffect, useReducer } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import InfoBar from '../../Components/InfoBar/InfoBar';
import Input from '../../Components/Input/Input';
import Messages from '../../Components/Messages/Messages';
import UsersInRoom from '../../Components/UsersInRoom/UsersInRoom';

import MyContext from '../../Contexts/Context';

import { ChatArea, Container } from './styles';

import io from '../../services/io';

const INITIAL_STATE = {
  usersInRoom: [],
  messages: [],
  userName: '',
  roomName: '',
  message: '',
  gender: '',
  showUsersInTheRoom: false,
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
      return {
        ...state,
        messages: [...state.messages, action.payload.message],
      };
    case 'SHOW_USERS_IN_THE_ROOM':
      return { ...state, showUsersInTheRoom: !state.showUsersInTheRoom };
    default:
      return state;
  }
};

export default function Chat() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const {
      userName: name,
      roomName: room,
      Gender: gender,
    } = location.state ?? { name: null, room: null, gender: null };

    if (!name || !room || !gender) {
      history.push('/');
    } else {
      dispatch({
        type: 'USERNAME_AND_ROOM',
        payload: { userName: name, roomName: room.toLowerCase(), gender },
      });

      io.emit('joinRoom', { name, room, gender }, () => {});

      io.on('roomData', (users) => {
        dispatch({ type: 'USERS_IN_ROOM', payload: { usersInRoom: users } });
      });

      return () => {
        io.emit('logout');
      };
    }
  }, [history, location.state]);

  useEffect(() => {
    io.on('message', (message) => {
      dispatch({
        type: 'MESSAGES',
        payload: { message },
      });
    });

    io.on('roomData', (users) => {
      dispatch({ type: 'USERS_IN_ROOM', payload: { usersInRoom: users } });
    });
  }, []);

  const sendMessages = (event) => {
    event.preventDefault();

    if (state.message) {
      io.emit('sendMessage', state.message, () =>
        dispatch({ type: 'MESSAGE', payload: { message: '' } })
      );
    }
  };

  const showUsersInTheRoom = () => {
    dispatch({ type: 'SHOW_USERS_IN_THE_ROOM' });
  };

  const allData = {
    userName: state.userName,
    roomName: state.roomName,
    usersInRoom: state.usersInRoom,
    messages: state.messages,
    message: state.message,
    sendMessages,
    showUsersInTheRoom,
    dispatch,
  };

  return (
    <MyContext.Provider value={allData}>
      <Container>
        {state.showUsersInTheRoom ? (
          <UsersInRoom width={90} display={'block'} />
        ) : (
          <>
            <UsersInRoom />
            <ChatArea>
              <InfoBar />
              <Messages />
              <Input />
            </ChatArea>
          </>
        )}
      </Container>
    </MyContext.Provider>
  );
}
