import React from 'react'
import { View as RView } from 'react-native'
import { Text } from 'react-native-ui-lib'

interface Props {
    title: string,
}

const TaskTitle: React.FC<Props> = ({title}) => {
    return (
            <RView style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                // alignItems: 'center',
            }}>
                <RView style={{height: 50, width: '20%', backgroundColor: 'powderblue'}}>
                    <Text text40>%</Text>
                </RView>
                <RView style={{height: 50, width: '80%', backgroundColor: 'skyblue'}} >
                    <Text text40>{title}</Text>
                </RView>
            </RView>
        // <View row >
        //     <View left>
        //         <Text text40>{title}</Text>
        //     </View>
        //     <View right>
        //         <Text text40>{title}</Text>
        //     </View>
        // </View>
    )
}

export default TaskTitle
