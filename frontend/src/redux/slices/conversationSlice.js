import { createSlice } from "@reduxjs/toolkit";

const initialState = { senderId: null };

const conversationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeSenderId: (state, action) => {
      state.senderId = action.payload;
    },
  },
});

export const { storeSenderId } = conversationSlice.actions;
export default conversationSlice.reducer;
