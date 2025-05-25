import { configureStore } from "@reduxjs/toolkit";
import mainContextReducer from "./mainContextSlice";
import chatReducer from "./chatSlice";

const appStore = configureStore({
  reducer: {
    mainContext: mainContextReducer,
    chat: chatReducer,
  },
});
export default appStore;
