import * as React from "react";
import { View, Text, Alert } from "react-native";
import Button from "../components/Button";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import DateTimePicker from "@react-native-community/datetimepicker";

const Home = () => {
  const navigation = useNavigation();
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    checkFistLaunch();
  }, []);

  async function handleNotification() {
    const trigger = new Date(date).getTime() + 24 * 60 * 60 * 1000;
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "My first notification",
          body: "This is my first notifications",
        },
        trigger,
        // trigger: {
        //   seconds: 5,
        //   repeats: false,

        // }
      });
      // Alert.alert("Notification set", {id});
    } catch (error) {
      console.log(error);
    }
  }

  async function checkFistLaunch() {
    const firstLaunch = await AsyncStorage.getItem("@firstLaunch");
    if (firstLaunch) {
      return;
    } else {
      await AsyncStorage.setItem("@firstLaunch", "true");
      navigation.navigate("Onboarding");
    }
  }

  return (
    <View style={globalStyles.container}>
      <DateTimePicker
        value={date}
        style={{ width: "25%" }}
        mode={"time"}
        onChange={(event, selectedDate) => setDate(selectedDate)}
      />
      <Button title={"Schedule Notification"} onPress={handleNotification} />
      <Card />
    </View>
  );
};

export default Home;
