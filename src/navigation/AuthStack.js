import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/AuthScreens/LoginScreen";
import SignUpScreen from "../screens/AuthScreens/SignUpScreen";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false 
    }} >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}