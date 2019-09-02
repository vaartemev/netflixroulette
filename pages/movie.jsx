import React from 'react';

import { MoviePage } from '../src/pages';
import { Footer } from '../src/components';

const Main = () => {
  return (
    <div id="root">
      <MoviePage />
      <Footer />
    </div>
  );
};

export default Main;
