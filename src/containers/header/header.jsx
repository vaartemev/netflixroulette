import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { MovieDetails } from '../../components/movieDetails/movieDetails';
import { Logo } from '../../components/logo/logo';
import { Button, ButtonType } from '../../components/button/button';
import {
  getMoviesBySearchQuery,
  setSearchValue,
  getMovieDetailsById,
} from '../../actions';
import './header.scss';

const mapStateToProps = state => ({
  movie: state.movie.movie,
  searchValue: state.movie.searchQuery,
  searchFilter: state.movie.searchBy,
  sortFilter: state.movie.sortBy,
});

const mapDispatchToProps = dispatch => ({
  handleOnEnterPress: (value, key, searchFilter, sortFilter) => {
    if (key === 'Enter') {
      dispatch(getMoviesBySearchQuery(value, searchFilter, sortFilter));
    }
  },
  getMovieDetails: id => {
    dispatch(getMovieDetailsById(id));
  },
  handleOnInput: value => {
    dispatch(setSearchValue(value));
  },
  handleOnSearchClick: (searchQuery, filter, sort) => {
    dispatch(getMoviesBySearchQuery(searchQuery, filter, sort));
  },
});

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  ({
    movie,
    searchValue,
    searchFilter,
    sortFilter,
    handleOnEnterPress,
    handleOnInput,
    getMovieDetails,
    handleOnSearchClick,
    match,
    children,
  }) => {
    const { id } = match.params;
    useEffect(() => {
      getMovieDetails(id);
    }, []);
    return (
      <div className="header">
        <Logo text="netflixroulette" />
        {children}
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <SearchField
                {...props}
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
            path="/search/:query"
            render={props => (
              <SearchField
                {...props}
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
            component={() => (
              <>
                {Object.keys(movie).length && (
                  <>
                    <Link to="/">
                      <Button type={ButtonType.searchLink} text="Search" />
                    </Link>
                    <MovieDetails movie={movie} />
                  </>
                )}
              </>
            )}
          />
        </Switch>
      </div>
    );
  },
);
