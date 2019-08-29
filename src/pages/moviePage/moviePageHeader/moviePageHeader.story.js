import React from 'react';
import { storiesOf } from '@storybook/react';
import { MoviePageHeader } from './moviePageHeader';

storiesOf('Header with movie', module).add('Header with movie', () => (
  <MoviePageHeader />
));
