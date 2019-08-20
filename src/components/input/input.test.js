import { shallow } from 'enzyme';
import { Input } from './input';

describe('<Input />', () => {
  const tree = shallow(<Input placeholderText="How are you doing" />);
  it('Should be rendering with placeholder How are you doing', () => {
    expect(tree).toMatchSnapshot();
  });
});
