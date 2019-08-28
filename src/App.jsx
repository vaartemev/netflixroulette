import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Footer } from './components/footer/footer';
import { SearchHeader } from './containers/searchHeader/searchHeader';
import { ErrorBoundary } from './containers/errorBoundary/errorBoundary';
import { PageNotFound } from './pages/pageNotFound/pageNotFound';
import { SearchPage } from './pages/searchPage/searchPage';
import { MoviePage } from './pages/moviePage/moviePage';

export const App = () => {
  return (
    <ErrorBoundary>
      <Switch>
        <Route path="/" exact component={SearchHeader} />
        <Route path="/search/:searchValue" component={SearchPage} />
        <Route path="/film/:id" component={MoviePage} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </ErrorBoundary>
  );
};
