import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonType } from '../../components';

interface FiltersTypes {
  key: string;
  title: string;
}

interface Props {
  type: string;
  filters: FiltersTypes[];
  filter: (arg: string) => void;
}

interface Store {
  searchBy: string;
  sortBy: string;
  movie: any;
}

export const RadioButton = ({ type, filters, filter }: Props) => {
  const { searchBy, sortBy } = useSelector<
    Store,
    { searchBy: string; sortBy: string }
  >(state => ({
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

  return (
    <>
      {filters.map(item => {
        return (
          <Button
            key={item.key}
            type={type}
            href=""
            text={item.title}
            checked={checkActiveButton(type, item.key)}
            handleOnClick={(): void => dispatch(filter(item.key))}
          />
        );
      })}
    </>
  );
};
