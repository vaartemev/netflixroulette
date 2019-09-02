import React, { useEffect, createRef } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { useRouter, withRouter } from 'next/router';

import { MovieDetails } from './movieDetails';
import { Logo, Button, ButtonType } from '../../../components';

import { getMovieDetailsById } from '../../../actions';
import './moviePageHeader.scss';

const mapStateToProps = state => ({
  movie: state.movie.get('movie'),
});

const mapDispatchToProps = dispatch => ({
  getMovieDetails: id => {
    dispatch(getMovieDetailsById(id));
  },
});

export const MoviePageHeader = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(({ movie, getMovieDetails }) => {
    const ref = createRef();
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
      getMovieDetails(id);
    });

    return (
      <div className="header">
        <Logo text="netflixroulette" />

        {Object.keys(movie).length && (
          <>
            <Button
              type={ButtonType.searchLink}
              ref={ref}
              href="/search"
              text="Search"
            />

            <MovieDetails movie={movie} />
          </>
        )}
      </div>
    );
  }),
);
