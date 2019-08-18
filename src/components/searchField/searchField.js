import React,{ useState } from 'react';
import { SearchControls } from '../searchControls/searchControls';
import { Input } from '../input/input';

import './searchField.scss';

export const SearchField = () => {
  const [searchValue, setValue] = useState('');
  return (
    <div className="search">
      <div className="search__title">Find your movie</div>
      <Input searchValue={searchValue} setValue={setValue}/>
      <SearchControls searchValue={searchValue}/>
    </div>
  );
};
