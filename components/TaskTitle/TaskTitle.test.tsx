import React from 'react'
import 'react-native'
import { NativeModules } from 'react-native'
import renderer from 'react-test-renderer'
import { TaskStatus, TaskTitle } from '../../components/TaskTitle'

NativeModules.StatusBarManager = {getHeight: jest.fn()}

describe('TaskTitle test', () => {
  it('Task Title', () => {
    const description = renderer.create(
    <TaskTitle {...{
        status: TaskStatus.done,
        title: 'Done',
    }}
    />).toJSON()
    expect(description).toMatchSnapshot()
  })

  it('Task Title', () => {
    const description = renderer.create(
    <TaskTitle {...{
        status: TaskStatus.active,
        title: 'Active',
    }}
    />).toJSON()
    expect(description).toMatchSnapshot()
  })

  it('Task Title', () => {
    const description = renderer.create(
    <TaskTitle {...{
        status: TaskStatus.closed,
        title: 'Closed',
    }}
    />).toJSON()
    expect(description).toMatchSnapshot()
  })
})