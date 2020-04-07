import React, { useContext } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';

import MyContext from '../../Contexts/Context';

export default function Messages() {
  const { messages } = useContext(MyContext);

  return (
    <ScrollToBottom>
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </ScrollToBottom>
  );
}
