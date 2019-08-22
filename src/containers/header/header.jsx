import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MovieDetails } from '../../components/movieDetails/movieDetails';
import { Logo } from '../../components/logo/logo';
import { SearchField } from '../../components/searchField/searchField';
import { Button, ButtonType } from '../../components/button/button';
import { getMoviesBySearchQuery, setSearchValue } from '../../actions';
import './header.scss';

export const Header = () => {
  const { movie, searchValue, searchFilter, sortFilter } = useSelector(
    state => ({
      movie: state.movie.movie,
      searchValue: state.movie.searchQuery,
      searchFilter: state.movie.searchBy,
      sortFilter: state.movie.sortBy,
    }),
  );

  const dispatch = useDispatch();

  const handleOnEnterPress = (value, key) => {
    if (key === 'Enter') {
      dispatch(getMoviesBySearchQuery(value, searchFilter, sortFilter));
    }
  };

  const handleOnInput = value => {
    dispatch(setSearchValue(value));
  };

  const handleOnSearchClick = (searchQuery, filter, sort) => {
    dispatch(getMoviesBySearchQuery(searchQuery, filter, sort));
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
        <SearchField
          handleOnEnterPress={handleOnEnterPress}
          handleOnInput={handleOnInput}
          handleOnSearchClick={handleOnSearchClick}
          searchValue={searchValue}
          searchFilter={searchFilter}
          sortFilter={sortFilter}
        />
      )}
    </div>
  );
};
