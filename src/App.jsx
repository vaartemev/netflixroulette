import React from 'react';
import { Route } from 'react-router-dom';
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
      <Route path="/film/:id" component={ResultBody} />
      <Footer />
    </ErrorBoundary>
  );
};
