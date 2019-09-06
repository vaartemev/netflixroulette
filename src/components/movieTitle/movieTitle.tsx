import React from 'react';

import './movieTitle.scss';

interface Props {
  className: string;
  title: string;
}

export const MovieTitle = ({ className, title }: Props) => {
  return <h2 className={className}>{title}</h2>;
};
