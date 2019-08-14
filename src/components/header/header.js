import React from 'react';
// import { MovieInfo } from '../movieInfo/movieInfo';
import { Logo } from '../logo/logo';
import { SearchField } from '../searchField/searchField';
import './header.scss';

export const Header = () => {
  return (
    <div className="header">
      {/* <MovieInfo /> */}
      <Logo text="netflixroulette"/>
      <SearchField />
    </div>
  );
};
