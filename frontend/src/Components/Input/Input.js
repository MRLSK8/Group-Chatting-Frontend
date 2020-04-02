import React, { useContext } from 'react';
import MyContext from '../../Contexts/Context';

export default function Input() {
  const { message, sendMessages, dispatch } = useContext(MyContext);

  return (
    <form>
    <input
      type='text'
      placeholder='Type a message...'
      value={message}
      onKeyPress={event =>
        event.key === 'Enter' ? sendMessages(event) : null
      }
      onChange={event => {
        dispatch({
          type: 'MESSAGE',
          payload: { message: event.target.value }
        });
      }}
    />
    <button onClick={event => sendMessages(event)}>Send</button>
  </form>
  );
}
