import React from 'react';
import Link from 'next/link';
import { Button, ButtonType } from '../../button';
import { setSearchFilter } from '../../../actions';
import { RadioButton } from '../../../containers';

import './searchControls.scss';

interface FiltersTypes {
  key: string;
  title: string;
}

const filters: FiltersTypes[] = [
  { key: 'title', title: 'Title' },
  { key: 'genres', title: 'Genre' },
];

interface Props {
  searchValue: string | string[];
  searchFilter: string;
  sortFilter: string;
  handleOnSearchClick: (
    searchValue: string | string[],
    searchFilter: string,
    sortFilter: string,
  ) => void;
}

export const SearchControls = ({
  searchValue,
  searchFilter,
  sortFilter,
  handleOnSearchClick,
}: Props) => {
  const myRef = React.createRef();
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
      <Link href={`/searchResult?searchValue=${searchValue}`}>
        <Button
          text="Search"
          ref={myRef}
          type={ButtonType.search}
          handleOnClick={() =>
            handleOnSearchClick(searchValue, searchFilter, sortFilter)
          }
        />
      </Link>
    </div>
  );
};
