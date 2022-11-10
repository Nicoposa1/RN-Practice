import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import BottomTabs from "./BottomTabs";
import Onboarding from "../screens/Onboarding";

const Stack = createStackNavigator();

export default function StackNavigator() {
  const myConfig = {
    headerShown: false,
    headerTitleAlign: "center",
    presentation: "modal",
    animationEnabled: true,
    gestureEnabled: true,
    animationTypeForReplace: "push",
    keyboardHandlingEnabled: true,
  };

  function CustomHeader({ title }) {
    return (
      <View
        style={{
          height: 80,
          width: "100%",
          backgroundColor: Colors.secondary,
          padding: 10,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: Colors.ligth,
          }}
        >
          {title}
        </Text>
      </View>
    );
  }

  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={myConfig}>
      <Stack.Screen name="Root" component={BottomTabs} />
      <Stack.Group screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerBackTitle: 'Home' }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
