import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Hello: React.FC = () => {
   return (
     <View style={styles.container}>
       <Text>Hello Victor</Text>
     </View>
   )
 }

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

export default Hello