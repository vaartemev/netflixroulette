import React from 'react';

interface NoFilmsFoundProps {
  className: string;
}

export const NoFilmsFound: React.FC<NoFilmsFoundProps> = ({ className }) => {
  return <h1 className={className}>No films found</h1>;
};
