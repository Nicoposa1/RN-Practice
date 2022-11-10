import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import React from "react";
import { signOut } from "../features/auth/auth";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const dispatch = useDispatch();

  const remove = async () => {
    try {
      await AsyncStorage.removeItem("@storage_Key");
      dispatch(signOut());
      console.log("Data Removed");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Profile</Text>
      <Button title="Sign Out" onPress={remove} />
    </View>
  );
};

export default Profile;
