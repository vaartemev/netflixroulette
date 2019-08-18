import React from 'react';
import './input.scss';

export const Input = ({ searchValue, setValue, handleOnEnterPress }) => {
  return (
    <label className="search__field--wrapper">
      <input
        type="text"
        placeholder="What do you what find?"
        className="search__field"
        onChange={e => setValue((searchValue = e.target.value))}
        onKeyPress={e =>
          e.key === 'Enter' ? handleOnEnterPress(searchValue) : false
        }
      />
    </label>
  );
};
