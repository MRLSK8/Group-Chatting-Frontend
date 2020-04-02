import React, { useContext } from 'react';
import onlineIcon from '../../assets/onlineIcon.png';
import closeIcon from '../../assets/closeIcon.png';
import { Link } from 'react-router-dom';
import MyContext from '../../Contexts/Context';

export default function InfoBar() {
  const { roomName } = useContext(MyContext);

  return (
    <div>
      <div>
        <img src={onlineIcon} alt='Online Icon' />
        <h3>{roomName}</h3>
      </div>
      <Link to='/'>
        <img src={closeIcon} alt='Close Icon' />
      </Link>
    </div>
  );
}
