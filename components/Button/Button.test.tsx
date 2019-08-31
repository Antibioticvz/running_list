import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'
import Button from './Button'


describe('Buttons test', () => {
  it('Button with title', () => {
    const button = renderer.create(<Button title={'My title'} />).toJSON()
    expect(button).toMatchSnapshot()
  })
})