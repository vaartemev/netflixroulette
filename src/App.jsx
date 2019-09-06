import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Footer } from './components';
import { SearchPageHeader, ErrorBoundary } from './containers';
import { PageNotFound, SearchPage, MoviePage } from './pages';

export const App = () => {
  return (
    <ErrorBoundary>
      <Switch>
        <Route path="/" exact component={SearchPageHeader} />
        <Route path="/search/:searchValue" component={SearchPage} />
        <Route path="/film/:id" component={MoviePage} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </ErrorBoundary>
  );
};