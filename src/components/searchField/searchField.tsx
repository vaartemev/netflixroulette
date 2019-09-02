import React from 'react';
import { SearchControls } from './searchControls';
import { Input } from '../input';

import './searchField.scss';

interface SearchFieldProps {
  handleOnEnterPress();
  handleOnInput();
  handleOnSearchClick();
  searchValue: string;
  searchFilter: string;
  sortFilter: string;
}

export const SearchField: React.FC<SearchFieldProps> = ({
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
