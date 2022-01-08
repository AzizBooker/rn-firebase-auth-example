import React from 'react'
import { View, Text,KeyboardAvoidingView,TextInput,Pressable } from 'react-native'
import styles from './style'
const SignupScreen = () => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainer}>
            <TextInput  
            style={styles.textInput} 
            placeholder="email" 
         //   value={}
           // onChangeText={(text)=>{}}
            />
            <TextInput  
            style={styles.textInput} 
            placeholder="password" 
         //   value={}
           // onChangeText={(text)=>{}}
           secureTextEntry
            />
            </View>
            <View style={styles.buttonContainer}>
                <Pressable >
                    <Text>Login</Text>
                </Pressable>
                <Pressable >
                    <Text>Register</Text>
                </Pressable>
            </View>
            
        </KeyboardAvoidingView>
    )
}

export default SignupScreen


