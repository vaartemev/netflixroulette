import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from '../../test-utils';
import { ResultBody } from './resultBody';
import { Provider } from 'react-redux';

describe('ResultBody', () => {
  const mockState = {
    movie: {
      isFetching: true
    }
  };

  it('render Preloader', () => {
    const store = createMockStore(mockState);
    const output = shallowWithStore(<ResultBody />, store).dive();
    expect(output.find('Preloader').length).toBe(1);
  });
});
