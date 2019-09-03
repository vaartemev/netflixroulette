import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonType } from '../../components';

type FiltersTypes = {
  key: string;
  title: string;
};

interface RadioButtonProps {
  type: string;
  filters: FiltersTypes[];
  filter: () => void;
}

export const RadioButton = ({
  type,
  filters,
  filter,
}: RadioButtonProps): JSX.Element => {
  const {
    searchBy,
    sortBy,
  }: { searchBy: string; sortBy: string } = useSelector(state => ({
    searchBy: state.movie.get('searchBy'),
    sortBy: state.movie.get('sortBy'),
  }));

  const dispatch = useDispatch();

  const checkActiveButton = (typeOfButton: string, key: string): boolean => {
    if (typeOfButton === ButtonType.filter) {
      return searchBy === key;
    }
    return sortBy === key;
  };

  return filters.map(item => {
    return (
      <Button
        key={item.key}
        type={type}
        href=""
        text={item.title}
        checked={checkActiveButton(type, item.key)}
        handleOnClick={() => dispatch(filter(item.key))}
      />
    );
  });
};
