import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import { configureStore } from '../src/store';
import '../src/normalize.scss';

const store = configureStore();

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <div id="root">
          <Component {...pageProps} />
        </div>
      </Provider>
    );
  }
}

export default MyApp;
