import React from 'react';
import './input.scss';

interface InputProps {
  searchValue: string;
  placeholderText: string;
  handleOnInput: (value: string) => void;
  handleOnEnterPress: (searchValue: string, key: string) => void;
}

export const Input: React.FC<InputProps> = ({
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
        onInput={({
          currentTarget: { value },
        }: React.FormEvent<HTMLInputElement>): void => handleOnInput(value)}
        onKeyDown={({ key }): void => handleOnEnterPress(searchValue, key)}
      />
    </label>
  );
};
