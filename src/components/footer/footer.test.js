import { shallow } from 'enzyme';
import { Footer } from './footer';

describe('<Footer />', () => {
  const tree = shallow(<Footer text="Vladimir" />);
  it('Should be rendering with Vladimir', () => {
    expect(tree).toMatchSnapshot();
  });
});
