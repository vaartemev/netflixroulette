import React from 'react';
import { storiesOf } from '@storybook/react';
import { SearchPageHeader } from './searchPageHeader';

storiesOf('HeaderWithSearch', module).add('Header with search', () => (
  <SearchPageHeader />
));
