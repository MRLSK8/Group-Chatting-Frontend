import React from 'react';
import onlineIcon from '../../assets/onlineIcon.png';
import closeIcon from '../../assets/closeIcon.png';
import { Link } from 'react-router-dom';

export default function InfoBar({ room }) {
  return (
    <div>
      <div>
        <img src={onlineIcon} alt='Online Icon' />
        <h3>{room}</h3>
      </div>
      <Link to='/'>
        <img src={closeIcon} alt='Close Icon' />
      </Link>
    </div>
  );
}
