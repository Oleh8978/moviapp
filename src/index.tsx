import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import App from './App';

import reportWebVitals from './reportWebVitals';

// History
import history from './historyApi';

// app config
import { Config } from './config/api';

// store 
import store from './stote';

// SCSS
import './assets/scss/main.scss';

Config.init({
    API_KEY: process.env.REACT_APP_API_KEY || '',
    MAIN_ROUTE: process.env.REACT_APP_MAIN_ROUTE || '',
})

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
