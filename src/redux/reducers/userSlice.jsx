import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  projectPolicy: null,
};

const UserSlice = createSlice({
  name: "userslice",
  initialState,
  reducers: {
    userData: (state, action) => {
      state.userData = action.payload;
    },

    projectPolicy: (state, action) => {
      state.projectPolicy = action.payload;
    },
  },
});

export const { userData, projectPolicy } = UserSlice.actions;

export default UserSlice.reducer;
