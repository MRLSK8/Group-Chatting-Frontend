import React from 'react';

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
        <p>{text}</p>
      </div>
    </div>
  ) : (
    <div>
      <div>
        <p>{text}</p>
      </div>
      <p>{user}</p>
    </div>
  );
}
