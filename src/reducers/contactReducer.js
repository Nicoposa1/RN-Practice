import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = [
  { id: 0, name: "Sara Lee" },
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jack Doe" },
];

const contactsStore = React.createContext([]);
const { Provider } = contactsStore;

function ContactsProvider({ children }) {
  const [contacts, dispatch] = React.useReducer(contactReducer, []);

  React.useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const contacts = await AsyncStorage.getItem("@contacts", contacts);
    if (contacts === null) {
      await AsyncStorage.setItem("@contacts", JSON.stringify(initialState));
      dispatch({ type: "SET_CONTACTS", contacts: initialState });
    } else {
      dispatch({ type: "SET_CONTACTS", contacts: JSON.parse(contacts) });
    }
  };

  function handleAddContact(name) {
    dispatch({ type: "ADD", id: Math.random(), name });
  }
  function handleDeleteContact(id) {
    dispatch({ type: "DELETE", id });
  }
  function handleChangeContact(contact) {
    dispatch({ type: "CHANGE", contact });
  }

  return (
    <Provider
      value={{
        contacts,
        handleAddContact,
        handleDeleteContact,
        handleChangeContact,
      }}
    >
      {children}
    </Provider>
  );
}

export { ContactsProvider, contactsStore };

export function contactReducer(contact, action) {
  switch (action.type) {
    case "SET_CONTACTS": {
      return action.contacts;
    }
    case "ADD": {
      const newContacts = [...contact, { id: action.id, name: action.name }];
      const jsonValue = JSON.stringify(newContacts);
      AsyncStorage.setItem("@contacts", jsonValue);
      return newContacts;
    }
    case "DELETE": {
      const newContacts = contact.filter((contact) => contact.id !== action.id);
      const jsonValue = JSON.stringify(newContacts);
      AsyncStorage.setItem("@contacts", jsonValue);
      return newContacts;
    }
    case "CHANGE": {
      const newContacts = contact.map((contact) =>
        contact.id === action.contact.id ? action.contact : contact
      );
      const jsonValue = JSON.stringify(newContacts);
      AsyncStorage.setItem("@contacts", jsonValue);
      return newContacts;
    }
    default: {
      throw new Error("Unhandled action type: " + action.type);
    }
  }
}

// function contactReducer(contacts, action) {
//   if (action.type === "ADD") {
//     return [...contacts, { id: action.id, name: action.name }];
//   } else if (action.type === "DELETE") {
//     return contacts.filter((contact) => contact.id !== action.id);
//   } else if (action.type === "CHANGE") {
//     return contacts.map((contact) =>
//       contact.id === action.contact.id ? action.contact : contact
//     );
//   } else {
//     throw new Error("Invalid action type" + action.type);
//   }
// }
