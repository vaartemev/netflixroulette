import { shallow } from 'enzyme';
import { Footer } from './footer';

describe('<Footer />', () => {
  const output = shallow(<Footer />);

  it('Renders Logo', () => {
    expect(output.find('Logo')).toHaveLength(1);
  });

  it('Should be rendering', () => {
    expect(output).toMatchSnapshot();
  });
});
