import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button/button';

import './error.scss';

export const Error = () => {
  return (
    <div className="page-404">
      <h1>Oh no! This page was not found :(</h1>
      <Link to="/">
        <Button text="Go Home" />
      </Link>
    </div>
  );
};
