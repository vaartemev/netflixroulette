import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { MovieDetails } from './movieDetails/movieDetails';
import { Logo, Button, ButtonType } from '../../../components';

import { getMovieDetailsById } from '../../../actions';
import './moviePageHeader.scss';

const mapStateToProps = state => ({
  movie: state.movie.movie,
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
  )(({ movie, getMovieDetails, match: { params: { id } } }) => {
    useEffect(() => {
      getMovieDetails(id);
    }, []);
    return (
      <div className="header">
        <Logo text="netflixroulette" />
        {Object.keys(movie).length && (
          <>
            <Link to="/">
              <Button type={ButtonType.searchLink} text="Search" />
            </Link>
            <MovieDetails movie={movie} />
          </>
        )}
      </div>
    );
  }),
);
