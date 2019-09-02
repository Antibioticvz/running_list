import { storiesOf } from '@storybook/react-native'
import React from 'react'
import Description from '../../components/Description'
import CenterView from './CenterView'

const stories = storiesOf('Text input fields', module)
stories.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)

stories.add('Multiline Description field', () => (
    <Description {...{
      label: 'Description',
      placeholder: 'What to expect',
      value: '',
      onChange: ()=>{},
    }}
    />
  ))