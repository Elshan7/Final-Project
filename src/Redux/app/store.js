import { configureStore } from '@reduxjs/toolkit';
import  loginSlice  from '../feature/login/loginSlice';
import userReducer from '../feature/user/userSlice';
import productReducer from '../feature/product/productSlice'; 
import  basketSlice  from '../feature/basket/basketSlice';
import  favoriteSlice  from '../feature/favorite/favoriteSlice';
import  MenuSlice  from '../feature/menu/menuSlice';


export const store = configureStore({
  reducer: {
    login: loginSlice,
    user: userReducer,
    product: productReducer,
    basket: basketSlice,
    favorite: favoriteSlice,
    menu: MenuSlice,
  },
});