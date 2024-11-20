import { createSlice } from "@reduxjs/toolkit";

let data =JSON.parse(localStorage.getItem("basket"));

const initialState = {
  items: JSON.parse(localStorage.getItem("basket")) || [],
  totalLength: data == null ? 0 : data.length,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const existItem = state.items.find(item => item.id === action.payload.id);

      if (existItem) {
        alert("already exist in the chart");
      } else {
        state.items.push(action.payload);
        localStorage.setItem('basket', JSON.stringify(state.items));
        let data =JSON.parse(localStorage.getItem("basket"));
        state.totalLength = data == null ? 0 : data.length; 
      }
     
    },
    deleteFromBasket: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem('basket', JSON.stringify(state.items));
      let data =JSON.parse(localStorage.getItem("basket"));
      state.totalLength = data == null ? 0 : data.length;  
    },
    clearBasket: (state) => {
      state.items = [];
      localStorage.removeItem('basket'); 
    },
  },
});

export const { addToBasket, deleteFromBasket, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;