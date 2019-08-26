import React from 'react';
import PropTypes from 'prop-types';
import { SearchControls } from '../../../components/searchControls/searchControls';
import { Input } from '../../../components/input/input';

import './searchField.scss';

export const SearchField = ({
  handleOnEnterPress,
  handleOnInput,
  handleOnSearchClick,
  searchValue,
  searchFilter,
  sortFilter,
}) => {
  return (
    <div className="search">
      <div className="search__title">Find your movie</div>
      <Input
        searchValue={searchValue}
        handleOnInput={handleOnInput}
        handleOnEnterPress={handleOnEnterPress}
        placeholderText="What do you what find?"
      />
      <SearchControls
        searchValue={searchValue}
        searchFilter={searchFilter}
        sortFilter={sortFilter}
        handleOnSearchClick={handleOnSearchClick}
      />
    </div>
  );
};

SearchField.propTypes = {
  handleOnEnterPress: PropTypes.func,
  handleOnInput: PropTypes.func,
  handleOnSearchClick: PropTypes.func,
  searchValue: PropTypes.string,
  searchFilter: PropTypes.string,
  sortFilter: PropTypes.string,
};
