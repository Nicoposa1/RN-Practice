import { View, Text } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../styles/global";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { signIn } from "../../features/auth/auth";

const LoginScreen = () => {
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const save = async (value) => {
    try {
      await AsyncStorage.setItem("@storage_Key", value);
      dispatch(signIn(value));
      console.log("Data Saved");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>LoginScreen</Text>
      <Input label={"Email"} value={token} onChangeText={setToken} />
      <Input label={"Password"} secureTextInput />
      <Button title={"Sign in"} onPress={() => save(token)} />
      <Button title={"Sign Up"} onPress={() => navigation.navigate("SignUp")} />
    </View>
  );
};

export default LoginScreen;
