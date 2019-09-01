import { storiesOf } from '@storybook/react-native'
import React from 'react'
import MyButton from '../../components/Button'
import CenterView from './CenterView'

const stories = storiesOf('Buttons', module)
stories.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)

stories
  .add('my button', () => (
    <MyButton title='my button' />
    ))
  .add('my button2', () => (
    <MyButton title='my button2' />
    ))