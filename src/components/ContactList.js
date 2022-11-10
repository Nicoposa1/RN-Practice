import * as React from "react";
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Input from "./Input";
import imgProfile from "../../assets/11.png";
import { Colors } from "../constants/colors";
import { FontAwesome } from "@expo/vector-icons";
import { contactsStore } from "../reducers/contactReducer";
import { globalStyles } from "../styles/global";

const ContactList = () => {
  const { contacts } = React.useContext(contactsStore);
  if (contacts.length === 0)
    return (
      <Text style={[globalStyles.title, {textAlign: "center"}]}>No Tienes contactos agendados</Text>
    );
  return (
    <ScrollView>
      {contacts.map((contact, index) => (
        <Contact key={index} contact={contact} />
      ))}
    </ScrollView>
  );
};
export default ContactList;

const Contact = ({ contact }) => {
  const { handleChangeContact, handleDeleteContact } =
    React.useContext(contactsStore);
  const [isEditing, setIsEditing] = React.useState(false);

  let contactContainer;

  if (isEditing) {
    contactContainer = (
      <View>
        <Input
          value={contact.name}
          onChangeText={(text) =>
            handleChangeContact({ ...contact, name: text })
          }
        />
      </View>
    );
  } else {
    contactContainer = (
      <View>
        <Text style={styles.name}>{contact.name}</Text>
      </View>
    );
  }

  return (
    <View style={styles.contactContainer}>
      <View style={styles.row}>
        <Image source={imgProfile} style={styles.img} />
        {contactContainer}
      </View>
      <View style={styles.row}>
        {isEditing ? (
          <Button title="Save" onPress={() => setIsEditing(false)} />
        ) : (
          <Pressable onPress={() => setIsEditing(true)}>
            <FontAwesome
              name="edit"
              size={24}
              color={Colors.secondary}
              style={{ marginRight: 15, marginTop: 5 }}
            />
          </Pressable>
        )}
        <Pressable onPress={() => handleDeleteContact(contact.id)}>
          <FontAwesome
            name="trash"
            size={24}
            color={Colors.secondary}
            style={{ marginRight: 15, marginTop: 5 }}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    borderColor: Colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.dark,
  },
});
