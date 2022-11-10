import { Button, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { globalStyles } from "../styles/global";
import AddContact from "../components/AddContact";
import ContactList from "../components/ContactList";
import { ContactsProvider} from "../reducers/contactReducer";

const Contacts = () => {
  //useState hook to manage state
  // const [contacts, setContacts] = React.useState(initialContacts);

  return (
    <ContactsProvider>
      <View style={globalStyles.simpleContainer}>
        <AddContact  />
        <ContactList />
      </View>
    </ContactsProvider>
  );
};

let nextId = 3;

export default Contacts;

const styles = StyleSheet.create({});
