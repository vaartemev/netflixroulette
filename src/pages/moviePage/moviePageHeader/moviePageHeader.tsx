import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useRouter, withRouter } from 'next/router';

import { MovieDetails } from './movieDetails';
import { Logo, Button, ButtonType } from '../../../components';

import { getMovieDetailsById } from '../../../actions';
import './moviePageHeader.scss';

type Props = StateProps & DispatchProps;

interface MoviesTypes {
  poster_path: string;
  title: string;
  tagline: string;
  vote_average: number;
  overview: string;
  release_date: string;
  runtime: number;
}

interface StateProps {
  movie: MoviesTypes;
}

interface DispatchProps {
  getMovieDetails: (id: number) => void;
}

const mapStateToProps = (state: any) => ({
  movie: state.movie.get('movie'),
});

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  getMovieDetails: (id: number) => {
    dispatch(getMovieDetailsById(id));
  },
});

const MovieHeader = ({ movie, getMovieDetails }: Props) => {
  const router = useRouter();
  const { id } = router.query;
  useEffect((): void => {
    getMovieDetails(id);
  });

  return (
    <div className="header">
      <Logo text="netflixroulette" />

      {Object.keys(movie).length && (
        <>
          <Button type={ButtonType.searchLink} href="/search" text="Search" />

          <MovieDetails movie={movie} />
        </>
      )}
    </div>
  );
};

export const MoviePageHeader = withRouter(
  connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps,
  )(MovieHeader),
);
