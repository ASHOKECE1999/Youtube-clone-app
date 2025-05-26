import { createSlice } from "@reduxjs/toolkit";

const mainContextSlice = createSlice({
  name: "mainContext",
  initialState: {
    isToggleOn: true,
    displayVideosList: [],
    isSearchOn: false,
    onSearchVideos: [],
  },
  reducers: {
    changeToggleState: (state) => {
      state.isToggleOn = !state.isToggleOn;
    },
    closeMenu: (state) => {
      state.isToggleOn = false;
    },
    addDisplayVideos: (state, action) => {
      state.displayVideosList = action.payload;
    },
    searchToggle: (state, action) => {
      state.isSearchOn = action.payload;
    },
    onSearchVideosSet: (state, action) => {
      console.log();
      state.onSearchVideos = action.payload;
    },
  },
});
export const {
  changeToggleState,
  closeMenu,
  addDisplayVideos,
  onSearchVideosSet,
  searchToggle,
} = mainContextSlice.actions;
export default mainContextSlice.reducer;
