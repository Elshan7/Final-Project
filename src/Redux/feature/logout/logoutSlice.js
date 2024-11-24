import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showLogout: false,
};

export const logoutSlice = createSlice({
  name: 'logout',
  initialState,
  reducers: {
    setShowLogout: (state, action) => {
      state.showLogout = action.payload;
    },
  },
});

export const { setShowLogout } = logoutSlice.actions;

export const selectShowLogout = (state) => state.logout.showLogout;

export default logoutSlice.reducer;
