import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

export const Input = ({
  searchValue,
  placeholderText,
  handleOnEnterPress,
  handleOnInput
}) => {
  return (
    <label className="search-field__wrapper">
      <input
        type="text"
        placeholder={placeholderText}
        className="search__field"
        onInput={({ target: { value } }) => handleOnInput(value)}
        onKeyPress={({ key }) => handleOnEnterPress(searchValue, key)}
      />
    </label>
  );
};

Input.propTypes = {
  searchValue: PropTypes.string,
  setValue: PropTypes.func,
  placeholderText: PropTypes.string,
  handleOnEnterPress: PropTypes.func
};
