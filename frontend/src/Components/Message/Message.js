import React, { useContext } from 'react';

import ReactEmoji from 'react-emoji';

import MyContext from '../../Contexts/Context';

import { AdminMessages, OthersUserMessages, UserMessages } from './styles';

export default function Message({ message: { user, text } }) {
  const { userName } = useContext(MyContext);
  let isSentByCurrentUser = false;

  isSentByCurrentUser = userName.trim() === user;

  return isSentByCurrentUser ? (
    <UserMessages>
      <div>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
    </UserMessages>
  ) : (
    <>
      {user !== 'admin' ? (
        <OthersUserMessages>
          <div>
            <h5>{user}</h5>
            <p>{ReactEmoji.emojify(text)}</p>
          </div>
        </OthersUserMessages>
      ) : (
        <AdminMessages>
          <div>
            <p>{ReactEmoji.emojify(text)}</p>
          </div>
        </AdminMessages>
      )}
    </>
  );
}
