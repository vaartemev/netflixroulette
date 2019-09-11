import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Logo, SearchField } from '../../components';
import { getMoviesBySearchQuery, setSearchValue } from '../../actions';
import { searchSelector } from '../../selectors';
import './searchPageHeader.scss';

export const SearchPageHeader = () => {
  const { searchQuery, searchBy, sortBy } = useSelector(searchSelector);
  const dispatch = useDispatch();
  const handleOnEnterPress = (
    value: string,
    key: string,
    searchFilter: string,
    sortFilter: string,
  ): void => {
    if (key === 'Enter') {
      dispatch(getMoviesBySearchQuery(value, searchFilter, sortFilter));
    }
  };
  const handleOnInput = (value: string): void => {
    dispatch(setSearchValue(value));
  };
  const handleOnSearchClick = (
    searchValue: string,
    filter: string,
    sort: string,
  ): void => {
    dispatch(getMoviesBySearchQuery(searchValue, filter, sort));
  };
  return (
    <div className="header">
      <Logo text="netflixroulette" />
      <SearchField
        handleOnEnterPress={() => handleOnEnterPress}
        handleOnInput={handleOnInput}
        handleOnSearchClick={() => handleOnSearchClick}
        searchValue={searchQuery}
        searchFilter={searchBy}
        sortFilter={sortBy}
      />
    </div>
  );
};
