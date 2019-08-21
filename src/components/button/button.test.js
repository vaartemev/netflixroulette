import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import sinon from 'sinon';
import { Button } from './button';

describe('<Button />', () => {
  it('Should render with Hello!', () => {
    const output = shallow(<Button text="Hello" />);
    expect(output.find('button').text()).toEqual('Hello');
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Test click event on button', () => {
    const handleOnClick = sinon.spy();
    const output = shallow(<Button handleOnClick={handleOnClick} />);
    output.find('button').simulate('click');
    expect(handleOnClick).toHaveProperty('callCount', 1);
  });
});
