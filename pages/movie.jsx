import React from 'react';

import { MoviePage } from '../src/pages';
import { Footer } from '../src/components';

const Main = (props) => {
  return (
    <>
      <MoviePage match={props} />
      <Footer />
    </>
  );
};

Main.getInitialProps = (props) => {
  let params;

  if (typeof props.req !== 'undefined') {
    params = props.req.params;
  } else {
    params = props.pathname;
  }
  return { params };
};

export default Main;
