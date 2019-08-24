import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <SearchField
              handleOnEnterPress={handleOnEnterPress}
              handleOnInput={handleOnInput}
              handleOnSearchClick={handleOnSearchClick}
              searchValue={searchValue}
              searchFilter={searchFilter}
              sortFilter={sortFilter}
            />
          )}
        />
        <Route
          path="/film/:id"
          render={() => (
            <>
              <Link to="/">
                <Button type={ButtonType.searchLink} text="Search" />
              </Link>
              <MovieDetails movie={movie} />
            </>
          )}
        />
      </Switch>
    </div>
  );
};
