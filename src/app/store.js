import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth";
import contactReducer from "../features/contacts/contacts";

export default configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactReducer,
  },
});
