import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../screens/Home";
import Contacts from "../screens/Contacts";
import { Colors } from "../constants/colors";
import ContactsRedux from "../screens/ContactRedux";

const Tab = createMaterialTopTabNavigator();


const TopTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarPosition="top" screenOptions={{
      tabBarActiveTintColor: Colors.secondary,
      headerTitleAlign: "center",
      tabBarLabelStyle: { fontSize: 12, color: Colors.secondary },
      tabBarIndicatorStyle: 'black',
    }} >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contacts" component={Contacts} /> 
      <Tab.Screen name="Redux" component={ContactsRedux} /> 
    </Tab.Navigator>
  )
}

export default TopTab
