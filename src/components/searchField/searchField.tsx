import React from 'react';
import { SearchControls } from './searchControls';
import { Input } from '../input';

import './searchField.scss';

interface Props {
  handleOnEnterPress: () => void;
  handleOnInput: () => void;
  handleOnSearchClick: () => void;
  searchValue: string | string[];
  searchFilter: string;
  sortFilter: string;
}

export const SearchField = ({
  handleOnEnterPress,
  handleOnInput,
  handleOnSearchClick,
  searchValue,
  searchFilter,
  sortFilter,
}: Props) => {
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
