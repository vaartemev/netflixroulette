import React from 'react';

import './preloader.scss';

export const Preloader: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="preloader">
      <div className="loader" />
    </div>
  );
};
