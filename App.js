import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/rootNavigator";
import Firebase ,{auth} from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function App() {

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
