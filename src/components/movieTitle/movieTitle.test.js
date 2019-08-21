import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { MovieTitle } from './movieTitle';

describe('Movie Title', () => {
  const props = {
    title: 'string2',
    className: 'string'
  };

  const output = shallow(<MovieTitle {...props} />);

  it('renders correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
