import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { View as RView } from 'react-native'
import { TaskStatus, TaskTitle } from '../../components/TaskTitle'

const stories = storiesOf('Task Title header', module)
stories.addDecorator(getStory => <RView style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>{getStory()}</RView>)

stories.add('Header Done', () => (
    <TaskTitle {...{
        status: TaskStatus.done,
        title: 'My  title title title title title title title title title v',
    }}
    />
  ))
  .add('Header Active', () => (
    <TaskTitle {...{
        status: TaskStatus.active,
        title: 'My  title title title title title title title title title v',
    }}
    />
  ))
  .add('Header Closed', () => (
    <TaskTitle {...{
        status: TaskStatus.closed,
        title: 'My  title title title title title title title title title v',
    }}
    />
  ))