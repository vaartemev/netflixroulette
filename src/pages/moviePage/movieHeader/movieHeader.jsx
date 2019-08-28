import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { MovieDetails } from '../../../components/movieDetails/movieDetails';
import { Logo } from '../../../components/logo/logo';
import { Button, ButtonType } from '../../../components/button/button';
import { getMovieDetailsById } from '../../../actions';
import './movieHeader.scss';

const mapStateToProps = state => ({
  movie: state.movie.movie,
});

const mapDispatchToProps = dispatch => ({
  getMovieDetails: id => {
    dispatch(getMovieDetailsById(id));
  },
});

export const MovieHeader = withRouter(
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
