import React, { useContext } from 'react';
import MyContext from '../../Contexts/Context';
import { FaEllipsisH } from 'react-icons/fa';

import { ButtonStyle } from './styles';

export default function Button() {
  const { showUsersInTheRoom } = useContext(MyContext);

  return (
    <ButtonStyle onClick={showUsersInTheRoom}>
      <FaEllipsisH size={22} color='#F5F5F5' />
    </ButtonStyle>
  );
}
