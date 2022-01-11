import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/rootNavigator";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import Firebase  from "./Firebase"; 
export default function App() {

  return (
    <Provider store={store}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    </Provider>
  );
}
