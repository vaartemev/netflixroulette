import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { ResultInfo } from './resultInfo';
import { configureStore } from '../../store';

const store = configureStore();

describe('ResultInfo', () => {
  const output = mount(
    <Router>
      <Provider store={store}>
        <ResultInfo />
      </Provider>
    </Router>,
  );
  it('Render correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
