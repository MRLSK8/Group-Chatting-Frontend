import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../../Contexts/Context';
import { FaReply } from 'react-icons/fa';

import Button from '../Button/Button';
import { Container } from './styles';

export default function InfoBar() {
  const { roomName } = useContext(MyContext);
  
  return (
    <Container>
      <Link to='/'>
        <FaReply size={18} color='#F5F5F5' />
      </Link>

      <h2>{roomName}</h2>

      <Button />
    </Container>
  );
}
