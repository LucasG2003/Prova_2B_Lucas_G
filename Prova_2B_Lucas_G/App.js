import LoginPage from "./src/pages/LoginPage";
import RegisterPage from "./src/pages/RegisterPage";
import { NavigationContainer } from "@react-navigation/native";
import CatalogoItens from "./src/pages/Dashboard";
import ForgotPassword from "./src/pages/ForgotPassword";

import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela de Login">
        <Stack.Screen name="Tela de Login" component={LoginPage} options={{ headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Tela de Registro" component={RegisterPage} options={{ headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Esqueceu a Semha" component={ForgotPassword} options={{ headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Catalogo de Itens" component={CatalogoItens} options={{ headerShown: false}}></Stack.Screen>
      </Stack.Navigator> 
    </NavigationContainer>
  );
  

}
