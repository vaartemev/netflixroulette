import React from 'react';

import { Header } from './components/header/header';
import { Additional } from './components/additional/additional';
import { ResultBody } from './components/resultBody/resultBody';
import { Footer } from './components/footer/footer';
import { ErrorBoundary } from './containers/errorBoundary/errorBoundary';

export const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <Additional foundedMovies={8} />
      <ResultBody />
      <Footer />
    </ErrorBoundary>
  );
};
