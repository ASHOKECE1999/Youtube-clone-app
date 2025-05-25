import { createSlice } from "@reduxjs/toolkit";
import { OFF_SET_LIVE_CHAT } from "../utils/constants";

const chatSlice = createSlice({
  name: "charSlice",
  initialState: {
    chatMessages: [],
  },
  reducers: {
    addChatMessages: (state, action) => {
      state.chatMessages.splice(OFF_SET_LIVE_CHAT, 1);
      state.chatMessages.unshift(action.payload);
    },
  },
});
export const { addChatMessages } = chatSlice.actions;
export default chatSlice.reducer;
