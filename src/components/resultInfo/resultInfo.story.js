import React from 'react';
import { storiesOf } from '@storybook/react';
import { ResultInfo } from './resultInfo';

storiesOf('ResultInfo', module).add('ResultInfo', () => (
  <ResultInfo foundedMovies={8} />
));
