import React from 'react'
import { Button as NativeButton } from 'react-native'

interface Props {
    title: string
}

const Button: React.FC<Props> = ({title}) => (
    <NativeButton title={title} onPress={()=>{}} />
)


export default Button