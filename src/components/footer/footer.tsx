import React from 'react';
import { Logo } from '../logo';
import './footer.scss';

export const Footer = (): JSX.Element => {
  return (
    <div className="footer">
      <Logo text="netflixroulette" />
    </div>
  );
};
