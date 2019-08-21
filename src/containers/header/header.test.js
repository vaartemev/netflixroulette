import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Header } from './header';
import { configureStore } from '../../store';
import { Provider } from 'react-redux';

const store = configureStore();

describe('Header', () => {
  const output = mount(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  it('Render correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
