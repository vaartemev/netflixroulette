import React from 'react';
import { storiesOf } from '@storybook/react';
import { Additional } from './additional';

storiesOf('Additional', module).add('Additional', () => (
  <Additional foundedMovies={8} />
));
