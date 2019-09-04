import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { View as RView } from 'react-native'
import TaskTitle from '../../components/TaskTitle'

const stories = storiesOf('Task Title header', module)
stories.addDecorator(getStory => <RView style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>{getStory()}</RView>)

stories.add('Header done', () => (
    <TaskTitle {...{
      title: 'My  title title title title title title title title title v',
    }}
    />
  ))