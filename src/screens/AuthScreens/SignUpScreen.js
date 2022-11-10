import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/global";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>SignInScreen</Text>
      <Input label={"Email"} />
      <Input label={"Password"} secureTextInput />
      <Button title={"Sign Up"} />
      <Button title={"Log in"} onPress={() => navigation.navigate('Login')} /> 
    </View>
  );
};

export default SignUpScreen;
