import React  from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AuthHomeScreen from '../screens/AuthHomeScreen'
import SignupScreen from "../screens/SignupScreen";
import Colors from "../utils/Colors";
import { useSelector } from "react-redux";
const Stack = createStackNavigator();

export default function RootNavigator() {
const isSignedIn=useSelector((state)=>state.root.isSignedIn)
  return (
      <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
          headerShown:false
      }}
      >
        {isSignedIn==true ?(
          <>
        <Stack.Screen name="Home" component={HomeScreen} />
        </>
        ):(
        <>
        <Stack.Screen name="Home" component={AuthHomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        </>
          
        
        )}   
      </Stack.Navigator>

  );
}
