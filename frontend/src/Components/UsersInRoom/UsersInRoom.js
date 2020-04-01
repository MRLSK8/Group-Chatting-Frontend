import React from 'react';

export default function UsersInRoom({ usersInRoom }) {
  return (
    <ul>
      {usersInRoom?.users?.map(user => (
        <li key={user.id}>
          <h5>{user.name}</h5>
        </li>
      ))}
    </ul>
  );
}
