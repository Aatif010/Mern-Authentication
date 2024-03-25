import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useReducer } from "./user/userSlice";
import { persistedReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({ user: useReducer });

const persistConfig = {
  key: "root",
  version: 1,
  Storage,
};
const persistedReducer = persistedReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);