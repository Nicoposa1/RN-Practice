import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import SignInScreen from "../screens/AuthScreens/SignUpScreen";
import AuthStack from "./AuthStack";
import DrawerNavigation from "./DrawerNavigation";
import StackNavigator from "./StackNavigator";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { restoreToken } from '../features/auth/auth'
import Splash from "../screens/Splash";

export default function RootNavigator() {
  const { userToken, isLoading } = useSelector(state => state.auth);
  console.log("🚀 ~ file: RootNavigator.js ~ line 14 ~ RootNavigator ~ userToken", userToken)
  const dispatch = useDispatch();

  useEffect(() => {
    getValue();
  }, []);

  async function getValue() {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        console.log('data restored', value);
        dispatch(restoreToken(value));
        return value;
      } else {
        console.log('no data');
        dispatch(restoreToken(null));
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (isLoading) {
    return <Splash />;
  }
  return (
    <NavigationContainer>
      {userToken ? <DrawerNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
}