import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import history from '../utils/history';

import App from './containers/App';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  MOUNT_NODE,
);
