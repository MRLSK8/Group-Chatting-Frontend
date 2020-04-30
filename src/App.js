import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles';
import * as serviceWorker from './serviceWorker';

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes />
    </Router>
  );
}

serviceWorker.register();