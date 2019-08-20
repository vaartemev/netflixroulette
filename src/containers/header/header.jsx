import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MovieDetails } from '../../components/movieDetails/movieDetails';
import { Logo } from '../../components/logo/logo';
import { SearchField } from '../../components/searchField/searchField';
import { Button, ButtonType } from '../../components/button/button';
import { getMoviesBySearchQuery } from '../../actions';
import './header.scss';

export const Header = () => {
  const { movie, searchFilter, sortFilter } = useSelector(state => ({
    movie: state.movie.movie,
    searchFilter: state.movie.searchBy,
    sortFilter: state.movie.sortBy
  }));

  const dispatch = useDispatch();

  const handleOnEnterPress = (searchValue, key) => {
    if (key === 'Enter') {
      dispatch(getMoviesBySearchQuery(searchValue, searchFilter, sortFilter));
    }
  };

  return (
    <div className="header">
      <Logo text="netflixroulette" />
      {typeof movie !== 'undefined' && Object.keys(movie).length ? (
        <>
          <Button type={ButtonType.searchLink} text="Search" />
          <MovieDetails movie={movie} />
        </>
      ) : (
        <SearchField handleOnEnterPress={handleOnEnterPress} />
      )}
    </div>
  );
};
