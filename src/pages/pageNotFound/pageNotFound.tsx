import React from 'react';
import { Button, Link } from '../../components';

import './pageNotFound.scss';

export const PageNotFound = () => {
  return (
    <div className="page-404">
      <h1>Oh no! This page was not found :(</h1>
      <Link href="/home">
        <Button text="Go Home" />
      </Link>
    </div>
  );
};
