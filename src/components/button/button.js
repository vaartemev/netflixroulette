import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.scss';

export const ButtonType = {
  search: 'search',
  searchLink: 'search-link',
  filter: 'filter',
  sort: 'sort'
};

export const Button = ({ text, active, handleOnClick, type = ButtonType.sort }) => {
  const resultClass = classNames('button', {
    'button__filter-active': active && type === ButtonType.filter,
    'button__sort-active': active && type === ButtonType.sort,
    button__sort: type === ButtonType.sort,
    button__search: type === ButtonType.search,
    'button__search button__search-link': type === ButtonType.searchLink,
    button__filter: type === ButtonType.filter
  });

  return (
    <button className={resultClass} type="button" onClick={handleOnClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  active: PropTypes.bool,
  handleOnClick: PropTypes.func,
  type: PropTypes.string
};
