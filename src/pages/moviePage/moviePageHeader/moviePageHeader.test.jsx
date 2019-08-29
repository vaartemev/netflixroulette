import React from 'react';
import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { MoviePageHeader } from './moviePageHeader';
import { configureStore } from '../../../store';

const store = configureStore();

describe('Movie page header', () => {
  const output = mount(
    <Router>
      <Provider store={store}>
        <MoviePageHeader />
      </Provider>
    </Router>,
  );
  it('Render correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
