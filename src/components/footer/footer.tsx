import React from 'react';
import { Logo } from '../logo';
import './footer.scss';

export const Footer: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="footer">
      <Logo text="netflixroulette" />
    </div>
  );
};
