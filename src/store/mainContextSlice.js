import { createSlice } from "@reduxjs/toolkit";

const mainContextSlice = createSlice({
  name: "mainContext",
  initialState: {
    isToggleOn: true,
    displayVideosList: [],
  },
  reducers: {
    changeToggelState: (state) => {
      state.isToggleOn = !state.isToggleOn;
    },
    closeMenu: (state) => {
      state.isToggleOn = false;
    },
    addDisplayVideos: (state, action) => {
      state.displayVideosList = action.payload;
    },
  },
});
export const { changeToggelState, closeMenu, addDisplayVideos } =
  mainContextSlice.actions;
export default mainContextSlice.reducer;
