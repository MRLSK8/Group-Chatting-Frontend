import React, { useContext } from 'react';
import MyContext from '../../Contexts/Context';

export default function Input() {
  const { message, sendMessages, setMessage } = useContext(MyContext);

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
          setMessage(event.target.value);
        }}
      />
      <button onClick={event => sendMessages(event)}>Send</button>
    </form>
  );
}
