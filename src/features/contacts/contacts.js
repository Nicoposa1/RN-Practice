import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "Sara Lee" },
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jack Doe" },
];

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state = action.payload;
    },
    AddContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      const index = state.find((item) => item.id === action.payload);
      state.splice(index, 1);
    },
    changeContact: (state, action) => {
      state = state.map((contact) => {
        if (contact.id === action.payload.id) {
          return action.payload;
        } else {
          return contact;
        }
      });
    },
  },
});

export const { setContacts, AddContact, deleteContact, changeContact } =
  contactSlice.actions;
export default contactSlice.reducer;
