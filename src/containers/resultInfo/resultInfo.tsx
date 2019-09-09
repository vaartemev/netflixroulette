import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { setSortFilter } from '../../actions';
import { ButtonType } from '../../components';
import { RadioButton } from '../radioButton';
import { resultSelector } from '../../selectors';
import './resultInfo.scss';

interface SortTypes {
  key: string;
  title: string;
}
const sortBy: SortTypes[] = [
  { key: 'release_date', title: 'release date' },
  { key: 'rating', title: 'rating' },
];

export const ResultInfo = () => {
  const { movies, genre } = useSelector(resultSelector);

  const router = useRouter();
  const { id } = router.query;

  return (
    <nav className="additional">
          {id ? (
        <span className="founded">Movies by {genre} genre</span>
      ) : (
              <>
          <span className="founded">{movies.length} movies founded</span>
          <div className="sort">
            <span className="sort__title">Sort by</span>
            <RadioButton
                type={ButtonType.sort}
                filters={sortBy}
              filter={setSortFilter}
            />
          </div>
        </>
      )}
    </nav>
  );
};
