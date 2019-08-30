import { storiesOf } from '@storybook/react'
import Button from '../../../components/Button'
const stories = storiesOf('Buttons', module)

stories.add('Standard Button', () => (
    <Button title={'hello'} />
  ))