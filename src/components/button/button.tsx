import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import './button.scss';

export const ButtonType = {
  search: 'search',
  searchLink: 'search-link',
  filter: 'filter',
  sort: 'sort',
};

interface Props {
  text: string;
  checked?: boolean;
  handleOnClick?: () => void;
  type?: string;
  href: URL;
}

export const Button = ({
  text,
  checked,
  handleOnClick,
  type = ButtonType.sort,
  href,
}: Props) => {
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
      <button className={resultClass} type="button" onClick={handleOnClick}>
        {text}
      </button>
    </Link>
  );
};
