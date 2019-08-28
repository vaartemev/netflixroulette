import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/button/button';

import './pageNotFound.scss';

export const PageNotFound = () => {
  return (
    <div className="page-404">
      <h1>Oh no! This page was not found :(</h1>
      <Link to="/">
        <Button text="Go Home" />
      </Link>
    </div>
  );
};
