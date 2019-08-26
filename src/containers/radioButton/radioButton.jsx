import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, ButtonType } from '../../components/button/button';

export const RadioButton = ({ type, filters, filter }) => {
  const { searchBy, sortBy } = useSelector(state => ({
    searchBy: state.movie.searchBy,
    sortBy: state.movie.sortBy,
  }));

  const dispatch = useDispatch();

  const checkActiveButton = (typeOfButton, key) => {
    if (typeOfButton === ButtonType.filter) {
      return searchBy === key;
    }
    return sortBy === key;
  };

  return filters.map(item => {
    return (
      <Button
        key={item.key}
        type={type}
        text={item.title}
        checked={checkActiveButton(type, item.key)}
        handleOnClick={() => dispatch(filter(item.key))}
      />
    );
  });
};

RadioButton.propTypes = {
  type: PropTypes.string,
  filters: PropTypes.array,
  filter: PropTypes.func,
};
