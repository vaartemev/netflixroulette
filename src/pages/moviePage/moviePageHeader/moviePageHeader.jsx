import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, useRouter } from 'next/router';
import Link from 'next/link';
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
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
      getMovieDetails(id);
    }, []);
    return (
      <div className="header">
        <Link href="localhost:3000/search">
          <li>aaaaaa</li>
        </Link>
        <Logo text="netflixroulette" />
        {Object.keys(movie).length && (
          <>
            <Link href="/">
              <Button type={ButtonType.searchLink} text="Search" />
            </Link>
            <MovieDetails movie={movie} />
          </>
        )}
      </div>
    );
  }),
);
