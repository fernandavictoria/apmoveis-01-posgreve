import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import {ScreenLogin, ScreenRegister} from '../screens'
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
        <Stack.Navigator id='login' screenOptions={{hearderShow: false}}>
            <Stack.Screen name='Login' component={ScreenLogin} />
            <Stack.Screen name='Register' component={ScreenRegister} />
        </Stack.Navigator>
    )
}