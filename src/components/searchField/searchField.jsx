import React, { useState } from 'react';
import { SearchControls } from '../searchControls/searchControls';
import { Input } from '../input/input';

import './searchField.scss';

export const SearchField = ({ handleOnKeyPress }) => {
  const [searchValue, setValue] = useState('');
  return (
    <div className="search">
      <div className="search__title">Find your movie</div>
      <Input
        searchValue={searchValue}
        setValue={setValue}
        handleOnKeyPress={handleOnKeyPress}
      />
      <SearchControls searchValue={searchValue} />
    </div>
  );
};
