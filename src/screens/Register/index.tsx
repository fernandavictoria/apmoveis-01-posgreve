import React, {useState} from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Alert } from 'react-native';
import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";
import {styles} from "./style";
import {colors} from "../../styles/colors";
import { LoginTypes } from '../../navigation/login.navigation';
import { ComponentButtonInterface } from '../../components';

export interface IRegister {
    name?: string
    email?: string
    password?: string
}
export function Register({ navigation }: LoginTypes) {
    const [data, setData] = useState<IRegister>();
    async function handlerRegister() {
        if (data?.email && data.name && data.password) {
            console.log(data)
        }else{
            Alert.alert("Preencha todos os campos");
        }
    }
    function handleGoBack(){
        navigation.navigate('Login')
    }
    function handleChange(item: IRegister){
        setData({...data, ...item});
    }
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Cadastre-se</Text>
                <View style={styles.formRow}>
                    <Ionicons name="person" style={styles.icon} />
                    <TextInput
                    placeholderTextColor={colors.preto}
                    style={styles.input}
                    placeholder='Nome'
                    onChangeText={(i)=> handleChange({name:i})}
                    />
                 </View>
                <View style={styles.formRow}>
                  <MaterialIcons name="email" style={styles.icon} />
                    <TextInput
                    placeholderTextColor={colors.preto}
                    style={styles.input}
                    placeholder='Email'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onChangeText={(i)=> handleChange({email:i})}
                    />
                    </View>
                <View style={styles.formRow}>
                  <MaterialIcons name="key" style={styles.icon} />
                    <TextInput
                    placeholderTextColor={colors.preto}
                    style={styles.input}
                    placeholder='Senha'
                    secureTextEntry={true}
                    autoCapitalize='none'
                    onChangeText={(i)=> handleChange({password:i})}
                    />

                </View>
            </KeyboardAvoidingView>
        </View>
    );
}