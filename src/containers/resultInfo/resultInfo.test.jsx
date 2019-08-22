import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { ResultInfo } from './resultInfo';
import { configureStore } from '../../store';

const store = configureStore();

describe('ResultInfo', () => {
  const output = mount(
    <Provider store={store}>
      <ResultInfo />
    </Provider>,
  );
  it('Render correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
