import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormState } from 'react-use-form-state';

import { Container, Card, Title, Form, GenderOptions } from './styles';

import { FaUsers } from 'react-icons/fa';

import io from '../../services/io';

export default function Login() {
  const [formState, { text, radio, label }] = useFormState({
    Gender: 'female',
  });
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formState.values);

    io.emit(
      'check',
      { name: formState.values.userName, room: formState.values.roomName },
      (error) => {
        if (error) {
          alert(error.error);
        } else {
          history.push(
            `/chat?name=${formState.values.userName}&room=${formState.values.roomName}`,
            formState.values
          );
        }
      }
    );
  };

  return (
    <Container>
      <Card>
        <FaUsers size={85} color='#2F3061' />
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

          <GenderOptions>
            <input {...radio('Gender', 'female')} id='female' />
            <label {...label('Gender', 'female')} htmlFor='female'>
              Female
            </label>

            <input {...radio('Gender', 'male')} id='male' />
            <label {...label('Gender', 'male')} htmlFor='male'>
              Male
            </label>
          </GenderOptions>

          <button>Join In</button>
        </Form>
      </Card>
    </Container>
  );
}
