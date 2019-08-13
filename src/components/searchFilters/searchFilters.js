import React from 'react';
import { SearchButton } from '../searchButton/searchButton';

import './searchFilters.scss';

export const SearchFilters = () => {
  return (
    <div className="filters">
      <div className="filters__title">Search by</div>
      <div className="filters__buttons">
        <a
          href="hello"
          className="filters__button filters__button-active button filter-by-title"
        >
          Title
        </a>
        <a href="hello" className="filters__button button filter-by-genre">
          Genre
        </a>
      </div>
      <SearchButton classNames="search__button button" />
    </div>
  );
};
