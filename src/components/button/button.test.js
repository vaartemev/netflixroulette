import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Button } from './button';

describe('<Button />', () => {
  const props = {
    text: 'Hello',
    checked: true,
    handleOnClick: () => {},
    type: 'radio'
  };

  it('Should be rendering with Hello World!', () => {
    const output = shallow(<Button text="Hello World!" />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
