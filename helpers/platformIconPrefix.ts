import { Platform } from 'react-native'

const platformIconPrefix = () => Platform.OS === "ios" ? "ios" : "md"

export default platformIconPrefix