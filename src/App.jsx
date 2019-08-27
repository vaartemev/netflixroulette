import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from './containers/header/header';
import { Footer } from './components/footer/footer';
import { ErrorBoundary } from './containers/errorBoundary/errorBoundary';
import { PageNotFound } from './pages/pageNotFound/pageNotFound';
import { MainLayout } from './pages/mainLayout/mainLayout';
import { MoviePage } from './pages/moviePage/moviePage';

export const App = () => {
  return (
    <ErrorBoundary>
      <Switch>
        <Route path="/" exact component={props => <Header {...props} />} />
        <Route
          path="/search/:searchValue"
          component={props => <MainLayout {...props} />}
        />
        <Route path="/film/:id" component={props => <MoviePage {...props} />} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </ErrorBoundary>
  );
};
