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

interface ButtonProps {
  text: string;
  type: string;
  href: string;
  checked: boolean;
  handleOnClick();
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  text,
  checked,
  handleOnClick,
  type = ButtonType.sort,
  href,
}: ButtonProps): JSX.Element => {
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
