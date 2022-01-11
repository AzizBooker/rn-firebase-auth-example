import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Button
} from "react-native";
import styles from "./style";

import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

const SignupScreen = () => {
    const auth=getAuth()
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
        <Button title="Login" style={styles.button} />
        <Button title="Register" style={styles.button } onPress={()=>{
            createUserWithEmailAndPassword(auth,'test@email.com','12341412')
            .then((user)=>{
                console.log(user)
            })
            .catch((error)=>{
                console.log(error)
            })
        }} />
        
        
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
