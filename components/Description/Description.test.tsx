import React from 'react'
import 'react-native'
import { NativeModules } from 'react-native'
import renderer from 'react-test-renderer'
import Description from './Description'

NativeModules.StatusBarManager = {getHeight: jest.fn()}

describe('TextArea test', () => {
  it('Empty TextArea with title', () => {
    const description = renderer.create(
    <Description {...{
      label: 'Description',
      placeholder: 'What to expect',
      value: '',
      onChange: ()=>{},
    }}
    />).toJSON()
    expect(description).toMatchSnapshot()
  })

  it('TextArea with title and value', () => {
    const description = renderer.create(
    <Description {...{
      label: 'Description',
      placeholder: 'What to expect',
      value: 'My Value',
      onChange: ()=>{},
    }}
    />).toJSON()
    expect(description).toMatchSnapshot()
  })
})