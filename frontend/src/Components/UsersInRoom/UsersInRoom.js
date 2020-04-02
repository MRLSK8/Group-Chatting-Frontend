import React, { useContext } from 'react';
import MyContext from '../../Contexts/Context';

export default function UsersInRoom() {
  const { usersInRoom } = useContext(MyContext);

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
