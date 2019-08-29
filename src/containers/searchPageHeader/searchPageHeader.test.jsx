import React from 'react';
import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { SearchPageHeader } from './searchPageHeader';
import { configureStore } from '../../store';

const store = configureStore();

describe('searchHeader', () => {
  const output = mount(
    <Provider store={store}>
      <SearchPageHeader />
    </Provider>,
  );
  it('Render correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
