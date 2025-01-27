import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      
      if ("access" in action.payload) {
        localStorage.setItem('accessToken', action.payload.access);
        localStorage.setItem('refreshToken', action.payload.refresh);
      } else {
        localStorage.setItem('accessToken', action.payload.accessToken);
        localStorage.setItem('refreshToken', action.payload.refreshToken);
      }
      
    },
    setUser(state, action) {
      state.user = action.payload;
      console.log("ACTION PAYLOAD:", action.payload);
      state.isAuthenticated = !!action.payload;
    },
    clearAuth(state) {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      Cookies.remove('accessToken');
      Cookies.remove('refreshToken');
    },
    
  },
});

export const { setAccessToken, setUser, clearAuth } = UserSlice.actions;
export default UserSlice.reducer;