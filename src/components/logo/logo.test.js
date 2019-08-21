import { shallow } from 'enzyme';
import { Logo } from './logo';

describe('Logo', () => {
  const props = {
    text: 'SampleText'
  };
  it('Should render Logo with SampleText', () => {
    const output = shallow(<Logo text={props.text} />);
    expect(
      output
        .find('div')
        .text()
        .trim()
    ).toEqual(props.text);
  });
});
