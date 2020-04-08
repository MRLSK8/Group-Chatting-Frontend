import React, { useContext } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';

import MyContext from '../../Contexts/Context';

import { Container } from './styles';

import './style.css';

export default function Messages() {
  const { messages } = useContext(MyContext);

  return (
    <Container>
      <ScrollToBottom className='scrollHeight'>
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </ScrollToBottom>
    </Container>
  );
}
