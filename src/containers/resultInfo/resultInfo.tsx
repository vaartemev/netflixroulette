import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { setSortFilter } from '../../actions';
import { ButtonType } from '../../components';
import { RadioButton } from '../radioButton';
import './resultInfo.scss';

export type SortByTypes = {
  key: string;
  title: string;
};

const sortBy: SortByTypes[] = [
  { key: 'release_date', title: 'release date' },
  { key: 'rating', title: 'rating' },
];

export const ResultInfo = (): JSX.Element => {
  const { foundedMovies, genre } = useSelector(state => ({
    foundedMovies: state.movie.get('movies'),
    genre: state.movie.get('searchQuery'),
  }));

  const router = useRouter();
  const { id } = router.query;

  return (
    <nav className="additional">
      {id ? (
        <span className="founded">Movies by {genre} genre</span>
      ) : (
        <>
          <span className="founded">{foundedMovies.length} movies founded</span>
          <div className="sort">
            <span className="sort__title">Sort by</span>
            <RadioButton
              type={ButtonType.Sort}
              filters={sortBy}
              filter={setSortFilter}
            />
          </div>
        </>
      )}
    </nav>
  );
};
