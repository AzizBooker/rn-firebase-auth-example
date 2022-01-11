import React from "react";
import { View, Text, Pressable } from "react-native";
import Colors from "../../utils/Colors";
import styles from './style'
const StyledButton = ({ text, onPress,primary }) => {

  const backgroundColor=primary==true ? Colors.background : '#ffffff00' 
  const textColor=primary==true ? Colors.text :"#000"
  return (
    <View style={styles.container}>
      <Pressable style={[styles.button,{backgroundColor:backgroundColor}]} onPress={onPress}>
        <Text style={[styles.text,{color:textColor}]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
