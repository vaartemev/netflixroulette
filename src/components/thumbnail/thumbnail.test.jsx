import { React } from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Thumbnail } from './thumbnail';

describe('Thumbnail', () => {
  const props = {
    src: 'string2',
    className: 'string',
  };

  const output = shallow(<Thumbnail {...props} />);

  it('renders correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
