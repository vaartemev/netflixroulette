import React from 'react';

import './movieTitle.scss';

interface MovieTitleProps {
  className: string;
  title: string;
}

export const MovieTitle: React.FC<MovieTitleProps> = ({ className, title }) => {
  return <h2 className={className}>{title}</h2>;
};
