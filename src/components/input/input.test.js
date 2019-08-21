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

  it('Should call handleOnInput on input', () => {
    const mock = jest.fn();

    console.log(mock.mockReturnValue(42));

    // expect(output).toMatchSnapshot();
  });

  it('Render property', () => {
    // expect(output).toMatchSnapshot();
  });
});
