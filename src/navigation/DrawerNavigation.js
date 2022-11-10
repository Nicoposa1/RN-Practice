import { createDrawerNavigator } from "@react-navigation/drawer";
import { Colors } from "../constants/colors";
import Notifications from "../screens/Notifications";
import StackNavigator from "./StackNavigator";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator useLegacyImplementation={true} initialRouteName='Stack' screenOptions={{
      drawerActiveTintColor: Colors.secondary,
      drawerType: 'front',
    }} >
      <Drawer.Screen name="Stack" component={StackNavigator} options={{headerShown: false}} />
      <Drawer.Screen name="Notifications " component={Notifications} />
    </Drawer.Navigator>
  );
}

