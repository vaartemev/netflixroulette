import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { SearchHeader } from './searchHeader';
import { configureStore } from '../../store';

const store = configureStore();

describe('searchHeader', () => {
  const output = mount(
    <Provider store={store}>
      <SearchHeader />
    </Provider>,
  );
  it('Render correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
