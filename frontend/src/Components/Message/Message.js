import React from 'react';

import ReactEmoji from 'react-emoji';

export default function Message({ message: { user, text }, name }) {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

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
