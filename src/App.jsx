import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from './containers/header/header';
import { ResultInfo } from './containers/resultInfo/resultInfo';
import { ResultBody } from './containers/resultBody/resultBody';
import { Footer } from './components/footer/footer';
import { ErrorBoundary } from './containers/errorBoundary/errorBoundary';

export const App = () => {
  return (
    <ErrorBoundary>
      <Switch>
        <Route path="/" component={Header} />
      </Switch>
      <ResultInfo />
      <ResultBody />
      <Footer />
    </ErrorBoundary>
  );
};
