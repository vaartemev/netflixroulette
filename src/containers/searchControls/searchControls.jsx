import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesBySearchQuery, setSearchFilter } from '../../actions';
import { Button, ButtonType } from '../../components/button/button';
import { RadioButton } from '../radioButton';

import './searchControls.scss';

const filters = [
  { key: 'title', title: 'Title' },
  { key: 'genres', title: 'Genre' }
];

export const SearchControls = ({ searchValue }) => {
  const searchFilter = useSelector(state => state.movie.searchBy);
  const sortFilter = useSelector(state => state.movie.sortBy);
  const dispatch = useDispatch();
  return (
    <div className="filters">
      <div className="filters__title">Search by</div>
      <div className="filters__buttons">
        <RadioButton
          type={ButtonType.filter}
          array={filters}
          actionType={setSearchFilter}
        />
      </div>
      <Button
        text="Search"
        type={ButtonType.search}
        handleOnClick={() =>
          dispatch(
            getMoviesBySearchQuery(searchValue, searchFilter, sortFilter)
          )
        }
      />
    </div>
  );
};
