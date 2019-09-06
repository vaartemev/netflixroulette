import React from 'react';

interface Props {
  className: string;
}

export const NoFilmsFound = ({ className }: Props) => {
  return <h1 className={className}>No films found</h1>;
};
