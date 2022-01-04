import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRounter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRounter>
      <App />
    </BrowserRounter>
  </React.StrictMode>,
  document.getElementById('root')
);
