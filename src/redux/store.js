import { configureStore} from "@reduxjs/toolkit";
import { contactsApi } from "./ContactSlice";
import { filterSlice } from "./FilterSlise";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware) ,
});

