import React from 'react';
import { Header } from './containers/header/header';
import { ResultInfo } from './containers/resultInfo/resultInfo';
import { ResultBody } from './containers/resultBody/resultBody';
import { Footer } from './components/footer/footer';
import { ErrorBoundary } from './containers/errorBoundary/errorBoundary';

export const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <ResultInfo />
      <ResultBody />
      <Footer />
    </ErrorBoundary>
  );
};
