import React, { useContext } from 'react';

import ReactEmoji from 'react-emoji';

import MyContext from '../../Contexts/Context';

import { OthersMessage, UserMessage } from './styles';

export default function Message({ message: { user, text } }) {
  const { userName } = useContext(MyContext);
  let isSentByCurrentUser = false;

  isSentByCurrentUser = userName.trim() === user;

  return isSentByCurrentUser ? (
    <UserMessage>
      <div>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
    </UserMessage>
  ) : (
    <OthersMessage>
      <div>
        <h5>{user}</h5>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
    </OthersMessage>
  );
}
