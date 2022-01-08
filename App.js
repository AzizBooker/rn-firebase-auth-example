import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/rootNavigator";
export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
