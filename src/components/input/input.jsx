import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

export const Input = ({
  searchValue,
  setValue,
  placeholderText,
  handleOnEnterPress
}) => {
  return (
    <label className="search-field__wrapper">
      <input
        type="text"
        placeholder={placeholderText}
        className="search__field"
        onChange={({ target: { value } }) => setValue((searchValue = value))}
        onKeyPress={({ key }) =>
          key === 'Enter' && handleOnEnterPress(searchValue)
        }
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
