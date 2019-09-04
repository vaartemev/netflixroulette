import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Logo, SearchField } from '../../components';
import { getMoviesBySearchQuery, setSearchValue } from '../../actions';
import './searchPageHeader.scss';

interface StateTypes {
  searchValue: string;
  searchFilter: string;
  sortFilter: string;
}

interface DispatchTypes {
  handleOnEnterPress: (
    value: string,
    key: string,
    searchFilter: string,
    sortFilter: string,
  ) => void;
  handleOnInput: (value: string) => void;
  handleOnSearchClick: (
    searchQuery: string,
    filter: string,
    sort: string,
  ) => void;
}

const mapStateToProps = (state: any): StateTypes => ({
  searchValue: state.movie.get('searchQuery'),
  searchFilter: state.movie.get('searchBy'),
  sortFilter: state.movie.get('sortBy'),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchTypes => ({
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
