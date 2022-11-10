import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { useDispatch, useSelector } from "react-redux";
import {
  setContacts,
  AddContact,
  deleteContact,
  changeContact,
} from "../features/contacts/contacts";

const ContactRedux = () => {
  const contacts = useSelector((state) => state.contacts);
  console.log(
    "🚀 ~ file: ContactRedux.js ~ line 8 ~ ContactRedux ~ contacts",
    contacts
  );
  const dispatch = useDispatch();

  const handleLongPress = (id) => {
    dispatch(deleteContact(id));
  }

  return (
    <View style={globalStyles.simpleContainer}>
      <Text>Contact Redux</Text>
      {contacts.map((contact, index) => (
        <Pressable key={index} onLongPress={() => handleLongPress(id)} >
          <Text style={globalStyles.title}>
            {" "}
            {contact.id} {contact.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ContactRedux;
