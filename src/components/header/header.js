import React from 'react';
import {useSelector} from 'react-redux';
import { MovieInfo } from '../movieInfo/movieInfo';
import { Logo } from '../logo/logo';
import { SearchField } from '../searchField/searchField';
import './header.scss';

export const Header = () => {
  const movie = useSelector(state => state.movie.movie);
  return (
    <div className="header">
      <Logo text="netflixroulette" />
	  {
		  'genres' in movie  ?
		  <MovieInfo movie={movie}/> :
      	<SearchField />
	  }
	  
    </div>
  );
};
