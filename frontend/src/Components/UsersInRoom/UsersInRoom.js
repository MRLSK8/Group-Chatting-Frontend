import React, { useContext } from 'react';
import MyContext from '../../Contexts/Context';

import {
  Container,
  UsersInTheRoomHeader,
  UsersInRoomList,
  Avatar,
} from './styles';

import Female from '../../assets/girl.svg';
import male from '../../assets/male.svg';

export default function UsersInRoom() {
  const { usersInRoom } = useContext(MyContext);

  return (
    <Container>
      <UsersInTheRoomHeader>
        <h2>Users In The Room</h2>
      </UsersInTheRoomHeader>

      <UsersInRoomList>
        <ul>
          {usersInRoom?.users?.map((user) => (
            <li key={user.id}>
              <div>
                {user.gender === 'female' ? (
                  <Avatar>
                    <img src={Female} alt='Female user' />
                  </Avatar>
                ) : (
                  <Avatar>
                    <img src={male} alt='Male user' />
                  </Avatar>
                )}

                <h5>{user.name}</h5>
              </div>
            </li>
          ))}
        </ul>
      </UsersInRoomList>
    </Container>
  );
}
