import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import MyButton from '../../components/Button/Button';
import CenterView from './CenterView';



storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('my button', () => (
    <MyButton onPress={action('clicked-text')} title='my button' />
    ))
  .add('my button2', () => (
    <MyButton onPress={action('clicked-text')} title='my button2' />
    ))