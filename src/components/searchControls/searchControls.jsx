import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonType } from '../button/button';
import { setSearchFilter } from '../../actions';
import { RadioButton } from '../../containers/radioButton';

import './searchControls.scss';

const filters = [
  { key: 'title', title: 'Title' },
  { key: 'genres', title: 'Genre' }
];

export const SearchControls = ({
  searchValue,
  searchFilter,
  sortFilter,
  handleOnSearchClick
}) => {
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
  handleOnSearchClick: PropTypes.func
};
