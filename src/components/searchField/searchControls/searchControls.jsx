import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button, ButtonType } from '../../button';
import { setSearchFilter } from '../../../actions';
import { RadioButton } from '../../../containers';

import './searchControls.scss';

const filters = [
  { key: 'title', title: 'Title' },
  { key: 'genres', title: 'Genre' },
];

export const SearchControls = ({
  searchValue,
  searchFilter,
  sortFilter,
  handleOnSearchClick,
}) => {
  const ref = React.createRef();
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
        ref={ref}
        href={`/searchResult?searchValue=${searchValue}`}
        type={ButtonType.search}
        handleOnClick={() =>
          handleOnSearchClick(searchValue, searchFilter, sortFilter)
        }
      />
    </div>
  );
};

SearchControls.propTypes = {
  searchValue: PropTypes.string,
  searchFilter: PropTypes.string,
  sortFilter: PropTypes.string,
  handleOnSearchClick: PropTypes.func,
};
