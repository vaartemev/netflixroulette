import { React } from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { SearchControls } from './searchControls';

describe('Search Controls', () => {
  const props = {
    searchValue: 'string2',
    searchFilter: 'string',
    sortFilter: 'string2',
    handleOnSearchClick: f => f(),
  };

  const output = shallow(<SearchControls {...props} />);

  it('renders correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
