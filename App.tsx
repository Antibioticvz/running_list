// export { default } from './storybook';
import ENV from './env'
import Hello from './screens/Hello'
import StorybookUI from './storybook'

export default ENV.STORYBOOK && __DEV__ ? StorybookUI : Hello 