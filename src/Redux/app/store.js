import { configureStore } from '@reduxjs/toolkit';
import  loginSlice  from '../feature/login/loginSlice';
import userReducer from '../feature/user/userSlice';


export const store = configureStore({
  reducer: {
    login: loginSlice,
    user: userReducer,
  },
});