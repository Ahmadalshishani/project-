import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    password: null,
  },
  reducers: {
    setLogin: (state, action) => {
      state.password = action.payload;
    },

    setLogout: (state, action) => {
      state.password = null;
      localStorage.clear();
    },
  },
});

export const { setLogin, setUserId, setLogout } = authSlice.actions;
export default authSlice.reducer;
