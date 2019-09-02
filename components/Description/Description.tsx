import React from 'react'
import { Colors, Text, TextArea, View } from 'react-native-ui-lib'
// import { Input } from 'react-native-elements'
      
interface Props {
    value: string,
    label: string,
    placeholder: string,
    onChange: (text: string) => void
}
const INPUT_SPACING = 10
const Description: React.FC<Props> = ({value, label, placeholder, onChange}) => {
    // const classes = useStyles()
    return (
      <>
        <Text text70 marginB-5>{label}</Text>
          <View
            style={{
              height: 150,
              borderWidth: 1,
              marginBottom: INPUT_SPACING,
              padding: 10,
              borderColor: Colors.dark60,
            }}
          >
            <TextArea {...{placeholder, value, onChangeText: onChange}}/>
          </View>
      </>
    )
}

export default Description
