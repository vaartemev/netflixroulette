import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { App } from './App';
import './normalize.scss';

const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
