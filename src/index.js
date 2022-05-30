import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Auth from './service/auth';
import { firebaseApp } from './service/firebas'

const auth = new Auth(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <App auth={auth}/>
  </React.StrictMode>,
  document.getElementById('root')
);

