import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormState } from 'react-use-form-state';

import { Container, Card, Title, Form } from './styles';

import { FaUsers } from 'react-icons/fa';

export default function Login() {
  const [formState, { text }] = useFormState();
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();

    history.push(
      `/chat?name=${formState.values.userName}&room=${formState.values.roomName}`
    );
  };

  return (
    <Container>
      <Card>
        <FaUsers size={75} color='#2F3061' style={{ marginTop: 35 }} />
        <Title>
          Join a <span>group</span> chat!
        </Title>
        <Form onSubmit={handleSubmit}>
          <input
            placeholder='Username'
            {...text('userName')}
            required
            autoFocus
          />
          <input placeholder="Room's name" {...text('roomName')} required />

          <button>Join In</button>
        </Form>
      </Card>
    </Container>
  );
}
