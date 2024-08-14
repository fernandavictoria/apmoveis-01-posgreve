import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Alert } from 'react-native';
import { MaterialIcons, Entypo} from "@expo/vector-icons";
import {styles} from "./style";
import {colors} from "../../styles/colors";
import { ComponentButtonInterface} from "../../components";
import {LoginTypes} from '../../navigation/login.navigation';

export interface IAuthenticate {
    email?: string;
    passaword?: string;
}

export function Login({navigation}: LoginTypes){
    const [data, setData] = useState<IAuthenticate>();
    async function handleSingIn() {
        if (data?.email && data.passaword) {
            console.log(data)
        }else{
            Alert.alert("Preencha todos os campos");
        }
    }
function handlerRegister(){
    navigation.navigate("Register")
}
function handleChange(item: IAuthenticate){
    setData({...data,...item});
}
return(
    <View style={styles.container}>
        <KeyboardAvoidingView>
            <Text style={styles.title}>Login</Text>
            <View style={styles.formRow}>
                <MaterialIcons name="email" style={styles.icon} />
                <TextInput
                placeholderTextColor={colors.principal}
                style={styles.input}
                placeholder='Email'
                keyboardType='email-address'
                autoCapitalize='none'
                onChangeText={(i) => handleChange({email: i})}
                />
             </View>
                 <View style={styles.formRow}>
                        <Entypo name="key" style={styles.icon} />
                        <TextInput
                            placeholderTextColor={colors.principal}
                            style={styles.input}
                            placeholder="Senha"
                            secureTextEntry={true}
                            autoCapitalize="none"
                            onChangeText={(i) => handleChange({ password: i })}
                        />
                    </View>
           
            <ComponentButtonInterface tittle='Login' type='primary' onPressI={handleSingIn} />
            <ComponentButtonInterface tittle='Cadastre-se' type='secondary' onPressI={handlerRegister} />
            
        </KeyboardAvoidingView>
    </View>
)
}
