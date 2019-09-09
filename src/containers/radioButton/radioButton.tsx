import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonType } from '../../components';
import { searchSelector } from '../../selectors';

interface FiltersTypes {
  key: string;
  title: string;
}

interface Props {
  type: string;
  filters: FiltersTypes[];
  filter: (arg: string) => void;
}

export const RadioButton = ({ type, filters, filter }: Props) => {
  const { searchBy, sortBy } = useSelector(searchSelector);

  const dispatch = useDispatch();

  const checkActiveButton = (typeOfButton: string, key: string): boolean => {
    if (typeOfButton === ButtonType.filter) {
      return searchBy === key;
    }
    return sortBy === key;
  };

  return (
    <>
      {filters.map(item => {
        return (
          <Button
            key={item.key}
            type={type}
            text={item.title}
            checked={checkActiveButton(type, item.key)}
            handleOnClick={() => dispatch(filter(item.key))}
          />
        );
      })}
    </>
  );
};
