import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View as RView } from 'react-native'
import { Text } from 'react-native-ui-lib'
import platformIconPrefix from '../../helpers/platformIconPrefix'
import styles from './styles'

export enum TaskStatus {
    active = 'ACTIVE',
    done = 'DONE',
    closed = 'CLOSED'
}
interface Props {
    title: string,
    status: TaskStatus,
}

const TaskTitle: React.FC<Props> = ({title, status}) => {
    const getStatusIcon = (status: TaskStatus) =>{
        switch (status) {
            case TaskStatus.active:
                return <Ionicons name={`${platformIconPrefix()}-radio-button-off`} size={40} color="blue" />
            case TaskStatus.done:
                return <Ionicons name={`${platformIconPrefix()}-checkmark-circle-outline`} size={40} color="green" />
            case TaskStatus.closed:
                return <Ionicons name={`${platformIconPrefix()}-close-circle-outline`} size={40} color="red" />
            default:
                return null
        }
    }
    return (
            <RView style={styles.container}>
                <RView style={styles.icon}>
                    { getStatusIcon(status) }
                </RView>
                <RView style={styles.title} >
                    <Text text40 style={styles.titleText}>
                        {title}
                    </Text>
                </RView>
            </RView>
    )
}

export default TaskTitle
