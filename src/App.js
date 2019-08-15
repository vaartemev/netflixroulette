import React from 'react';
import { Header } from './components/header/header';
import { ResultInfo } from './components/resultInfo/resultInfo';
import { ResultBody } from './components/resultBody/resultBody';
import { Footer } from './components/footer/footer';
import { ErrorBoundary } from './containers/errorBoundary/errorBoundary';

export const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <ResultInfo foundedMovies={8} />
      <ResultBody />
      <Footer />
    </ErrorBoundary>
  );
};
