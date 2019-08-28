import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { MovieHeader } from './movieHeader';
import { configureStore } from '../../store';

const store = configureStore();

describe('Header', () => {
  const output = mount(
    <Provider store={store}>
      <MovieHeader />
    </Provider>,
  );
  it('Render correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
