import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Button } from './button';

describe('<Button />', () => {
  it('Should render with Hello!', () => {
    const output = shallow(<Button text="Hello" />);
    expect(output.find('button').text()).toEqual('Hello');
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should call handleOnClick on click', () => {
    const handleOnClick = jest.fn();
    const output = shallow(<Button handleOnClick={handleOnClick} />);
    output.find('button').simulate('click');
    expect(handleOnClick).toHaveBeenCalled();
  });
});
