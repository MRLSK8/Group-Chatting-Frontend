import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div>
      <div>
        <h1>Join</h1>
        <form>
          <input
            placeholder='Name'
            onChange={event => setName(event.target.value)}
            required
          />
          <input
            placeholder='Room'
            onChange={event => setRoom(event.target.value)}
            required
          />
          <Link
            onClick={event =>
              name === '' || room === '' ? event.preventDefault() : null
            }
            to={`/chat?name=${name}&room=${room}`}
          >
            <button type='submit'>Sign In</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
