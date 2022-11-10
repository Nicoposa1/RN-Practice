import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import { Colors } from "../constants/colors";
import image from "../../assets/11.png";

const Card = () => {
  const { userToken } = useSelector((state) => state.auth);
  console.log("🚀 ~ file: Card.js ~ line 8 ~ Card ~ user", userToken);

  const doSomething = () => {
    console.log("1");
    console.log("2");
  };

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={image} style={styles.img} />
        <Text style={styles.name}>{userToken}</Text>
      </View>
      <Button title={"Add friend"} onPress={doSomething} />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "snow",
    width: "85%",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.primary,
  },
  img: {
    width: 100,
    height: 100,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
