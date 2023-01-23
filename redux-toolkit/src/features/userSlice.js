import { createSlice } from "@reduxjs/toolkit";

//name of slice initial data of user
export const userSlice = createSlice({
  name: "userList",
  initialState: {
    userList: null,
  },

  reducers: {
    //it will create automatically actions and payload
    userList: (state, action) => {
      // logic for login
      state.userList = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

//action
export const { userList, logout } = userSlice.actions;

//reducers
export const selectUser = (state) => state.user;
export default userSlice.reducer;
