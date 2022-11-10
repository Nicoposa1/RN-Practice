import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import { Colors } from "../constants/colors";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopTab from "./TopTab";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const navigation = useNavigation();
  const options = (name, nameBar) => {
    return {
      headerLeft: ({}) => {
        return (
          <Pressable onPress={() => navigation.openDrawer()}>
            <FontAwesome
              name={nameBar}
              size={24}
              color={Colors.secondary}
              style={{ marginLeft: 15 }}
            />
          </Pressable>
        );
      },
      tabBarIcon: ({ color }) => (
        <FontAwesome name={name} size={30} color={color} />
      ),
    };
  };
  return (
    <Tab.Navigator
      initialRouteName="TopTab"
      screenOptions={{
        tabBarActiveTintColor: Colors.secondary,
        headerTitleAlign: "center",
        headerRight: () => (
          <Pressable onPress={() => navigation.navigate('Settings')} >
            <FontAwesome
              name="cog"
              size={30}
              color={Colors.secondary}
              style={{ marginRight: 15 }}
            />
          </Pressable>
        )
      }}
      >
      <Tab.Screen
        name="TopTab" 
        component={TopTab}
        options={options("home", "bars")
      }
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: "tomato", color: Colors.ligth },
          ...options("user", "bars"),
        }}
      />
    </Tab.Navigator>
  );
}
