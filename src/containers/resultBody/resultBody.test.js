import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { ResultBody } from './resultBody';
import { configureStore } from '../../store';
import { Provider } from 'react-redux';

const store = configureStore();

describe('ResultBody', () => {
  const output = mount(
    <Provider store={store}>
      <ResultBody />
    </Provider>
  );
  it('Render correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
