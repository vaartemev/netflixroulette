import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from './components';
import { SearchPageHeader, ErrorBoundary } from './containers';
import { PageNotFound, SearchPage, MoviePage } from './pages';

export const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route exact path="/" component={SearchPageHeader} />
          <Route path="/searchResult/:value" component={SearchPage} />
          <Route path="/movie/:id" component={MoviePage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
      <Footer />
    </ErrorBoundary>
  );
};
