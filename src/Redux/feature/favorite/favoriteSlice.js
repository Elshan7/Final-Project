import { createSlice } from "@reduxjs/toolkit";

let data =JSON.parse(localStorage.getItem("favorite"));

const initialState = {
    items:JSON.parse(localStorage.getItem("favorite")) || [],
    totalLength2: data == null ? 0 : data.length,
    error: null,
};

export const favoriteSlice = createSlice ({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
              alert("already exist in the wishlist")
            } else {
              state.items.push(action.payload);
              localStorage.setItem('favorite', JSON.stringify(state.items));
              let data =JSON.parse(localStorage.getItem("favorite"));
              state.totalLength2 = data == null ? 0 : data.length; 
              state.error = null; 
            }
          },
          deleteFromFavorite: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            localStorage.setItem('favorite', JSON.stringify(state.items));
            let data =JSON.parse(localStorage.getItem("favorite"));
            state.totalLength2 = data == null ? 0 : data.length; 
            state.error = null; 
          },
          clearFavorite: (state) => {
            state.items = [];
            localStorage.removeItem('favorite');
            state.error = null; 
          },
    },
});

export const {addToFavorite, deleteFromFavorite, clearFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;