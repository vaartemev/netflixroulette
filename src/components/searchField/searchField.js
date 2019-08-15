import React from 'react';
import { SearchFilters } from '../searchFilters/searchFilters';
import { Input } from '../input/input';

import './searchField.scss';

export const SearchField = () => {
  return (
    <div className="search">
      <div className="search__title">Find your movie</div>
      <Input />
      <SearchFilters />
    </div>
  );
};
