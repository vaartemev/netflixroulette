import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MovieInfo } from '../../components/movieInfo/movieInfo';
import { Logo } from '../../components/logo/logo';
import { SearchField } from '../../components/searchField/searchField';
import { getMoviesBySearchQuery } from '../../actions';
import './header.scss';

export const Header = () => {
  const { movie, searchFilter, sortFilter } = useSelector(state => ({
    movie: state.movie.movie,
    searchFilter: state.movie.searchBy,
    sortFilter: state.movie.sortBy
  }));

  const dispatch = useDispatch();

  const handleOnEnterPress = searchValue => {
    dispatch(getMoviesBySearchQuery(searchValue, searchFilter, sortFilter));
  };

  return (
    <div className="header">
      <Logo text="netflixroulette" />
      {typeof movie !== 'undefined' && Object.keys(movie).length ? (
        <MovieInfo movie={movie} />
      ) : (
        <SearchField handleOnEnterPress={handleOnEnterPress} />
      )}
    </div>
  );
};
