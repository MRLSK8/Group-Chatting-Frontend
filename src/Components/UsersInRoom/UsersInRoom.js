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

import Button from '../Button/Button';

export default function UsersInRoom({ width, display }) {
  const { usersInRoom } = useContext(MyContext);

  return (
    <Container width={width} display={display}>
      <UsersInTheRoomHeader>
        <div></div>
        <h2>Users In The Room</h2>
        <Button />
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
