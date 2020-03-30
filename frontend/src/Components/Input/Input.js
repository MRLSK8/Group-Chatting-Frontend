import React from 'react';

export default function Input({ message, sendMessage, setMessage }) {
  return (
    <form>
      <input
        type='text'
        placeholder='Type a message...'
        value={message}
        onKeyPress={event =>
          event.key === 'Enter' ? sendMessage(event) : null
        }
        onChange={event => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={event => sendMessage(event)}>Send</button>
    </form>
  );
}
