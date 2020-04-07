import React, { useContext } from 'react';

import ReactEmoji from 'react-emoji';

import MyContext from '../../Contexts/Context';

import { AdminMessage, UserMessage } from './styles';

export default function Message({ message: { user, text } }) {
  const { userName } = useContext(MyContext);
  let isSentByCurrentUser = false;

  const trimmedName = userName.trim().toLowerCase();

  if (trimmedName === user) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <UserMessage>
      <p>{trimmedName}</p>
      <div>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>

    </UserMessage>
  ) : (
    <AdminMessage>
        <h2>{ReactEmoji.emojify(text)}</h2>
    </AdminMessage>
  );
}
