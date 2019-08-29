import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { SearchPageHeader } from './searchPageHeader';
import { configureStore } from '../../store';

const store = configureStore();

describe('Search page Header', () => {
  const output = mount(
    <Router>
      <Provider store={store}>
        <SearchPageHeader />
      </Provider>
    </Router>,
  );
  it('Render correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
