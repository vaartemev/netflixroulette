import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, ButtonType } from './button';
import { RadioButton } from '../../containers/radioButton';

storiesOf('Button', module)
  .add('Button', () => <Button type={ButtonType.search} text="Search" />)
  .add('Button', () => <Button type={ButtonType.searchLink} text="Search" />)
  .add('Radio Filter', () => (
    <RadioButton
      type={ButtonType.filter}
      array={[{ key: 'title' }, { key: 'title2' }]}
    />
  ))
  .add('Radio Sort', () => (
    <RadioButton
      type={ButtonType.sort}
      array={[{ key: 'title' }, { key: 'title2' }]}
    />
  ));
