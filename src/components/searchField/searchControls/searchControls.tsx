import React from 'react';
import { Button, ButtonType } from '../../button';
import { setSearchFilter } from '../../../actions';
import { RadioButton } from '../../../containers';

import './searchControls.scss';

interface FiltersTypes {
  title: string;
  key: string;
}

const filters: FiltersTypes[] = [
  { key: 'title', title: 'Title' },
  { key: 'genres', title: 'Genre' },
];

interface SearchControlsProps {
  searchValue: string;
  searchFilter: string;
  sortFilter: string;
  handleOnSearchClick: (
    searchValue: string,
    searchFilter: string,
    sortFilter: string,
  ) => void;
}

export const SearchControls: React.FC<SearchControlsProps> = ({
  searchValue,
  searchFilter,
  sortFilter,
  handleOnSearchClick,
}): JSX.Element => {
  return (
    <div className="filters">
      <div className="filters__title">Search by</div>
      <div className="filters__buttons">
        <RadioButton
          type={ButtonType.filter}
          filters={filters}
          filter={setSearchFilter}
        />
      </div>

      <Button
        text="Search"
        href={`/searchResult?searchValue=${searchValue}`}
        type={ButtonType.search}
        handleOnClick={(): void =>
          handleOnSearchClick(searchValue, searchFilter, sortFilter)
        }
      />
    </div>
  );
};
