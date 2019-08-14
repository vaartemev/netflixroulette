import React from 'react';
import { Button, ButtonType } from '../button/button';
import { RadioButton } from '../../containers/radioButton';

import './searchFilters.scss';

const filters = [{ key: 'Title' }, { key: 'Genre' }];
export const SearchFilters = () => {
  return (
    <div className="filters">
      <div className="filters__title">Search by</div>
      <div className="filters__buttons">
        <RadioButton type={ButtonType.filter} array={filters} />
      </div>
      <Button text="Search" type={ButtonType.search} />
    </div>
  );
};
