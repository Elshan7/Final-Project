import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: JSON.parse(localStorage.getItem("basket")) || [], 
  totalLength: 0, 
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const existItem = state.items.find(item => item.id === action.payload.id);

      if (existItem) {
        alert("Item already exists in the basket!");
      } else {
        state.items.push(action.payload);
        localStorage.setItem("basket", JSON.stringify(state.items)); 
      }
    },
    deleteFromBasket: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem("basket", JSON.stringify(state.items)); 
    },
    clearBasket: (state) => {
      state.items = [];
      localStorage.removeItem("basket"); 
    },
  },
  
  extraReducers: (builder) => {
    builder.addDefaultCase((state) => {
      state.totalLength = state.items.length; 
    });
  },
});

export const { addToBasket, deleteFromBasket, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;







