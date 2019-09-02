import React from 'react';
import './input.scss';

interface InputProps {
  searchValue: string;
  placeholderText: string;
  handleOnEnterPress();
  handleOnInput();
}

export const Input: React.FunctionComponent<InputProps> = ({
  searchValue,
  placeholderText,
  handleOnEnterPress,
  handleOnInput,
}: InputProps): JSX.Element => {
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
