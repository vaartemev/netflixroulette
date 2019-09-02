import React from 'react';

interface NoFilmsFoundProps {
  className: string;
}

export const NoFilmsFound: React.FunctionComponent<NoFilmsFoundProps> = ({
  className,
}: NoFilmsFoundProps): JSX.Element => {
  return <h1 className={className}>No films found</h1>;
};
