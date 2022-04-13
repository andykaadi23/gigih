import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackList: [],
};

export const tracklistSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    storeTrackList: (state, action) => {
      state.trackList = action.payload;
    },
    clearTracksList: (state) => {
      state.state = initialState;
    },
  },
});

export const { storeTrackList, clearTracksList } = tracklistSlice.actions;

export default tracklistSlice.reducer;
