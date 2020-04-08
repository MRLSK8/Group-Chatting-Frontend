import React, { useContext } from 'react';
import MyContext from '../../Contexts/Context';

import { ContainerForm } from './styles';

import { FaPaperPlane } from 'react-icons/fa';

export default function Input() {
  const { message, sendMessages, dispatch } = useContext(MyContext);

  return (
    <ContainerForm>
      <input
        type='text'
        placeholder='Type a message...'
        value={message}
        onKeyPress={(event) =>
          event.key === 'Enter' ? sendMessages(event) : null
        }
        onChange={(event) => {
          dispatch({
            type: 'MESSAGE',
            payload: { message: event.target.value },
          });
        }}
        autoFocus
      />

      <button onClick={(event) => sendMessages(event)}>
        <FaPaperPlane size={18} color='#2f3061' />
      </button>
    </ContainerForm>
  );
}
