import * as React from "react";
import { Button, StyleSheet, View } from "react-native";
import { Colors } from "../constants/colors";
import Input from "./Input";
import { contactsStore } from "../reducers/contactReducer";

const AddContact = () => {
  const { handleAddContact } = React.useContext(contactsStore);
  const [name, setName] = React.useState('');

  const handleAdd = () => {
    setName("");
    handleAddContact(name);
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "80%" }}>
        <Input label={"Add contact"} value={name} onChangeText={setName} />
      </View>
      <Button title="Add" color={Colors.primary} onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: "5%",
  },
});

export default AddContact;
