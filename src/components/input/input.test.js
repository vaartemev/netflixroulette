import { shallow } from 'enzyme';
import { Input } from './input';

describe('<Input />', () => {
  const props = {
    placeholderText: 'some text'
  };

  const output = shallow(<Input placeholderText={props.placeholderText} />);

  it('Should be rendering with placeholder "some text"', () => {
    const input = output.find('input');
    expect(input.prop('placeholder')).toEqual(props.placeholderText);
  });

  it('Render property', () => {
    expect(output).toMatchSnapshot();
  });
});
