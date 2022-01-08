import React  from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SignupScreen from "../screens/SignupScreen";
import Colors from "../utils/Colors";
const Stack = createStackNavigator();

export default function RootNavigator() {
const isSignedIn=false
  return (
      <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
          headerShown:false
      }}
      >
        {isSignedIn==true ?(
        <Stack.Screen name="Home" component={HomeScreen} />
        ):(
        <Stack.Screen name="Signup" component={SignupScreen} 
          
        />
        )}   
      </Stack.Navigator>

  );
}
