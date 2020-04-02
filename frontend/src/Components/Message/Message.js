import React, { useContext } from 'react';

import ReactEmoji from 'react-emoji';

import MyContext from '../../Contexts/Context';

export default function Message({ message: { user, text } }) {
  const { userName } = useContext(MyContext);
  let isSentByCurrentUser = false;

  const trimmedName = userName.trim().toLowerCase();

  if (trimmedName === user) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div>
      <p>{trimmedName}</p>
      <div>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div>
      <div>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
      <p>{user}</p>
    </div>
  );
}
