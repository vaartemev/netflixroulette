import React from 'react';
import { toJS } from 'immutable';
import { connect } from 'react-redux';
import { Logo, SearchField } from '../../components';
import { getMoviesBySearchQuery, setSearchValue } from '../../actions';
import './searchPageHeader.scss';

const mapStateToProps = state => ({
  searchValue: state.getIn(['movie', 'searchQuery']),
  searchFilter: state.movie.searchBy,
  sortFilter: state.movie.sortBy,
});

const mapDispatchToProps = dispatch => ({
  handleOnEnterPress: (value, key, searchFilter, sortFilter) => {
    if (key === 'Enter') {
      dispatch(getMoviesBySearchQuery(value, searchFilter, sortFilter));
    }
  },
  handleOnInput: value => {
    dispatch(setSearchValue(value));
  },
  handleOnSearchClick: (searchQuery, filter, sort) => {
    dispatch(getMoviesBySearchQuery(searchQuery, filter, sort));
  },
});

export const SearchPageHeader = connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  ({
    searchValue,
    searchFilter,
    sortFilter,
    handleOnEnterPress,
    handleOnInput,
    handleOnSearchClick,
  }) => {
    return (
      <div className="header">
        <Logo text="netflixroulette" />
        <SearchField
          handleOnEnterPress={handleOnEnterPress}
          handleOnInput={handleOnInput}
          handleOnSearchClick={handleOnSearchClick}
          searchValue={searchValue}
          searchFilter={searchFilter}
          sortFilter={sortFilter}
        />
      </div>
    );
  },
);
