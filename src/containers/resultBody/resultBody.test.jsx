import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { ResultBody } from './resultBody';
import { configureStore } from '../../store';

const store = configureStore();

describe('ResultBody', () => {
  const output = mount(
    <Router>
      <Provider store={store}>
        <ResultBody />
      </Provider>
    </Router>,
  );
  it('Render correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
