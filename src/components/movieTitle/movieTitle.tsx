import React from 'react';

import './movieTitle.scss';

interface MovieTitleProps {
  className: string;
  title: string;
}

export const MovieTitle: React.FunctionComponent<MovieTitleProps> = ({
  className,
  title,
}: MovieTitleProps): JSX.Element => {
  return <h2 className={className}>{title}</h2>;
};
