import React from 'react';
import './input.scss';

export const Input = ({searchValue, setValue}) => {
  return (
    <input
      type="text"
      placeholder="What do you what find?"
	  className="search__field"
	  onChange={(e) => setValue(searchValue = e.target.value)}
    />
  );
};
