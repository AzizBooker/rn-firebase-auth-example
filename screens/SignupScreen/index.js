import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Button
} from "react-native";
import styles from "./style";
import StyledButton from "../../components/StyledButton";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

const SignupScreen = () => {
  const auth=getAuth()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState('')

  const handleSignup=(()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(({user})=>{
        console.log(user)
    })
    .catch((error)=>{
      
      console.log(error.code)
      if(error.code=='auth/invalid-email'){
        console.warn('Invalid Email')
      }
    })
  })


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="email"
           value={email}
           onChangeText={(text)=>{setEmail(text)}}
        />
        <TextInput
          style={styles.textInput}
          placeholder="password"
            value={password}
           onChangeText={(text)=>{setPassword(text)}}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton text="Cancel" />
        <StyledButton primary text="Signup" onPress={handleSignup} />       
      </View>
    </View>
  );
};

export default SignupScreen;
