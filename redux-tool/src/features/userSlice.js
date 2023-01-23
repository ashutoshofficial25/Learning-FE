import { createSlice } from "@reduxjs/toolkit";

//name of slice initial data of user
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },

  reducers: {
    //it will create automatically actions and payload
    login: (state, action) => {
      // logic for login
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

//action
export const { login, logout } = userSlice.actions;

//reducers
export const selectUser = (state) => state.user;
export default userSlice.reducer;
