import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from './containers/header/header';
import { ResultInfo } from './containers/resultInfo/resultInfo';
import { ResultBody } from './containers/resultBody/resultBody';
import { Footer } from './components/footer/footer';
import { ErrorBoundary } from './containers/errorBoundary/errorBoundary';
import { Error } from './components/error/error';

export const App = () => {
  return (
    <ErrorBoundary>
      <Switch>
        <Route path="/" exact component={props => <Header {...props} />} />
        <Route
          path="/search/:searchValue"
          component={props => (
            <>
              <Header {...props} />
              <ResultInfo />
              <ResultBody {...props} />
            </>
          )}
        />
        <Route
          path="/film/:id"
          component={props => (
            <>
              <Header {...props} />
              <ResultInfo />
              <ResultBody {...props} />
            </>
          )}
        />
        <Route component={Error} />
      </Switch>
      <Footer />
    </ErrorBoundary>
  );
};
