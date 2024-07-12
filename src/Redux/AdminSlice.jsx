import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  adminUser: null,
  adminRefreshToken: null,
  adminAccessToken: null,
  isAdminAuthenticated: false,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdminAccessToken(state, action) {
      state.adminAccessToken = action.payload.accessToken;
      state.adminRefreshToken = action.payload.refreshToken;
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshToken);

    },
    setAdminUser(state, action) {
      state.adminUser = action.payload.user;
      state.isAdminAuthenticated = !!action.payload.user;
    },
    clearAdminAuth(state) {
      state.adminUser = null;
      state.adminAccessToken = null;
      state.adminRefreshToken = null;
      state.isAdminAuthenticated = false;
    },
  },
});

export const { setAdminAccessToken, setAdminUser, clearAdminAuth } = adminSlice.actions;
export default adminSlice.reducer;