import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { MovieDetails } from './movieDetails';

describe('Movie Details', () => {
  const props = {
    movie: {
      poster_path: 'string1',
      title: 'string2',
      tagline: 'string3',
      vote_average: 7.4,
      overview: 'string5',
      release_date: '2018-03-30w',
      runtime: 2,
    },
  };

  const output = shallow(<MovieDetails {...props} />);

  it('renders correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
