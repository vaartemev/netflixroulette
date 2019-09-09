import React from 'react';
import './input.scss';

interface Props {
  searchValue: string | string[];
  placeholderText: string;
  handleOnEnterPress: (searchValue: string | string[], key: string) => void;
  handleOnInput: (value: string) => void;
}

export const Input = ({
  searchValue,
  placeholderText,
  handleOnEnterPress,
  handleOnInput,
}: Props) => {
  return (
    <label className="search-field__wrapper" htmlFor="input">
      <input
        type="text"
        placeholder={placeholderText}
        className="search__field"
        onInput={({ currentTarget: { value } }) => handleOnInput(value)}
        onKeyDown={({ key }) => handleOnEnterPress(searchValue, key)}
      />
    </label>
  );
};
