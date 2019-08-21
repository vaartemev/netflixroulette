import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { SearchField } from './searchField';

describe('Search Field', () => {
  const props = {
    searchValue: 'string2',
    searchFilter: 'string',
    sortFilter: 'string2',
    handleOnSearchClick: f => f(),
    handleOnEnterPress: f => f(),
    handleOnInput: f => f()
  };

  const output = shallow(<SearchField {...props} />);

  it('renders correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
