import React, { forwardRef } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.scss';

export const ButtonType = {
  search: 'search',
  searchLink: 'search-link',
  filter: 'filter',
  sort: 'sort',
};

export const Button = forwardRef(
  ({ text, checked, handleOnClick, type = ButtonType.sort, href }, ref) => {
    const resultClass = classNames('button', {
      'button__filter-active': checked && type === ButtonType.filter,
      'button__sort-active': checked && type === ButtonType.sort,
      button__sort: type === ButtonType.sort,
      button__search: type === ButtonType.search,
      'button__search button__search-link': type === ButtonType.searchLink,
      button__filter: type === ButtonType.filter,
    });

    return (
      <Link href={href}>
        <button
          className={resultClass}
          ref={ref}
          type="button"
          onClick={handleOnClick}
        >
          {text}
        </button>
      </Link>
    );
  },
);

Button.propTypes = {
  text: PropTypes.string,
  checked: PropTypes.bool,
  handleOnClick: PropTypes.func,
  type: PropTypes.string,
};
