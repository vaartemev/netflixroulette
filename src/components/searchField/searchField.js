import React from 'react';
import { SearchFilters } from '../searchFilters/searchFilters';
import { SearchInput } from '../searchInput/searchInput';

import "./searchField.scss"

export const SearchField = () => {
  return (
    <div className="search">
      <div className="search__title">Find your movie</div>
          <SearchInput />
          <SearchFilters />
    </div>
  )
}
