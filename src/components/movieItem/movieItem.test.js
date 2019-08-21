import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { MovieItem } from './movieItem';

describe('Movie Item', () => {
  const props = {
    src: 'string1',
    title: 'string2',
    year: 'string3',
    genre: [1, 2],
    handleOnClick: f => f()
  };

  const output = shallow(<MovieItem {...props} />);

  it('renders correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
