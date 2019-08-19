import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchControls } from '../../containers/searchControls/searchControls';
import { Input } from '../input/input';

import './searchField.scss';

export const SearchField = ({ handleOnEnterPress }) => {
  const [searchValue, setValue] = useState('');
  return (
    <div className="search">
      <div className="search__title">Find your movie</div>
      <Input
        searchValue={searchValue}
        setValue={setValue}
        handleOnEnterPress={handleOnEnterPress}
        placeholderText="What do you what find?"
      />
      <SearchControls searchValue={searchValue} />
    </div>
  );
};

SearchField.propTypes = {
  handleOnEnterPress: PropTypes.func
};
