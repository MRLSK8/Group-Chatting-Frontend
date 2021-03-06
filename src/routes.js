import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Pages/Login';
import Chat from './Pages/Chat';

export default function Router() {
  return (
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/chat' exact component={Chat} />
      <Redirect path='*' to='/' />
    </Switch>
  );
}
