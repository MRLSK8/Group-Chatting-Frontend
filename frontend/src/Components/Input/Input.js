import React from 'react';

export default function Input({ message, sendMessages, setMessage }) {
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
