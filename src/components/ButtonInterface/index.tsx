import { TouchableOpacityProps, TouchableOpacity, Text} from "react-native";
import {styles} from "./style"
import * as React from 'react'

export interface IBInterface extends TouchableOpacityProps {
    onPressI: () => void
    tittle:string
    type: 'primary' | 'secondary' | 'third'
}
export function ButtonInterface ({ onPressI, tittle, type, ...rest }: IBInterface) {
    return(
        <TouchableOpacity style={
            type== "primary" ? styles.buttonPrimary:
                type== "secondary" ? styles.buttonSecondary:
                styles.buttonThird
        }
        onPress={onPressI}
        {...rest}
        >
            <Text style={styles.text}>{tittle}</Text>
        </TouchableOpacity>
    )
}