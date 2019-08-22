import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

export const Input = ({
  searchValue,
  placeholderText,
  handleOnEnterPress,
  handleOnInput,
}) => {
  return (
    <label className="search-field__wrapper" htmlFor="input">
      <input
        type="text"
        placeholder={placeholderText}
        className="search__field"
        onInput={({ target: { value } }) => handleOnInput(value)}
        onKeyDown={({ key }) => handleOnEnterPress(searchValue, key)}
      />
    </label>
  );
};

Input.propTypes = {
  searchValue: PropTypes.string,
  placeholderText: PropTypes.string,
  handleOnEnterPress: PropTypes.func,
};
