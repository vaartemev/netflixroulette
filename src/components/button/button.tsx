import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import './button.scss';

type TypesOfButtonType = {
  search: string;
  searchLink: string;
  filter: string;
  sort: string;
};

interface ButtonProps {
  text: string;
  type?: string;
  href?: string;
  checked?: boolean;
  handleOnClick?: () => void;
}

export const ButtonType: TypesOfButtonType = {
  search: 'search',
  searchLink: 'search-link',
  filter: 'filter',
  sort: 'sort',
};

export const Button: React.FC<ButtonProps> = ({
  text,
  checked,
  handleOnClick,
  type = ButtonType.sort,
  href,
}) => {
  const resultClass: string = classNames('button', {
    'button__filter-active': checked && type === ButtonType.filter,
    'button__sort-active': checked && type === ButtonType.sort,
    button__sort: type === ButtonType.sort,
    button__search: type === ButtonType.search,
    'button__search button__search-link': type === ButtonType.searchLink,
    button__filter: type === ButtonType.filter,
  });

  return (
    <Link href={href}>
      <button className={resultClass} type="button" onClick={handleOnClick}>
        {text}
      </button>
    </Link>
  );
};
