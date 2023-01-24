import * as React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import Input from "../components/Input";
import Button from "../components/Button";

function reducer(state, action) {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title };
    case "SET_BODY":
      return { ...state, body };
    default:
      return state;
  }
}

async function sendPushNotification() {
  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      accept: "application/json",
      "accept-encoding": "gzip, deflate",
      "content-type": "application/json",
    },
    body: JSON.stringify(state),
  });
}

const Notifications = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    to: "",
    message: "",
    title: "",
    body: "",
    data: {},
  });

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Notifications</Text>
      <Input label={"Push Token"} />
      <Input
        label={"title"}
        onChangeText={(text) => dispatch({ type: "SET_TITLE", title: text })}
      />
      <Input
        label={"Body"}
        onChangeText={(text) => dispatch({ type: "ET_BODY", body: text })}
      />
      <Button title={"Send"} onPress={() => sendPushNotification()} />
    </View>
  );
};

export default Notifications;
