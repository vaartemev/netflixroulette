import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MovieInfo } from '../movieInfo/movieInfo';
import { Logo } from '../logo/logo';
import { SearchField } from '../searchField/searchField';
import { getMoviesBySearchQuery } from '../../actions';
import './header.scss';

export const Header = () => {
  const searchValue = useSelector(state => state.movie.searchValue);
  const searchFilter = useSelector(state => state.movie.searchBy);
  const sortFilter = useSelector(state => state.movie.sortBy);
  const dispatch = useDispatch();

  const handleOnKeyPress = event => {
    if (event.key === 'Enter') {
      dispatch(getMoviesBySearchQuery(searchValue, searchFilter, sortFilter));
    }
  };

  const movie = useSelector(state => state.movie.movie);
  return (
    <div className="header">
      <Logo text="netflixroulette" />
      {typeof movie !== 'undefined' && 'genres' in movie ? (
        <MovieInfo movie={movie} />
      ) : (
        <SearchField handleOnKeyPress={handleOnKeyPress} />
      )}
    </div>
  );
};
