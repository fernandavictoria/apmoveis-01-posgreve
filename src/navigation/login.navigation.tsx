import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import {Login, Register} from '../screens'
import * as React from 'react'
type LoginStackParamList = {
    Login: undefined
    Register: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
    navigation : LoginScreenNavigationProp

}
export function LoginNavigation(){
    const Stack = createStackNavigator<LoginStackParamList>()
    return(
        <Stack.Navigator  screenOptions={{headerShown: false}}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    )
}