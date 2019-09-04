import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { View as RView } from 'react-native'
import { TaskStatus, TaskTitle } from '../../components/TaskTitle'

const stories = storiesOf('Task Title header', module)
stories.addDecorator(withKnobs)
stories.addDecorator(getStory => <RView style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>{getStory()}</RView>)

stories.add('Header Done', () => (
    <TaskTitle {...{
        status: TaskStatus.done,
        title: text('Title', 'Done title'),
    }}
    />
  ))
  .add('Header Active', () => (
    <TaskTitle {...{
        status: TaskStatus.active,
        title: text('Title', 'Active title'),
    }}
    />
  ))
  .add('Header Closed', () => (
    <TaskTitle {...{
        status: TaskStatus.closed,
        title: text('Title', 'Closed title'),
    }}
    />
  ))