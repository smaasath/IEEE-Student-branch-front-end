import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
};

const UserSlice = createSlice({
  name: "userslice",
  initialState,
  reducers: {
    userData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { userData } = UserSlice.actions;

export default UserSlice.reducer;
