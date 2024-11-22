import { createSlice } from "@reduxjs/toolkit";

// Initial state setup, including getting the basket from localStorage
const initialState = {
  items: JSON.parse(localStorage.getItem("basket")) || [], // Initially loaded items from localStorage
  totalLength: 0, // Will be derived dynamically from items
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
        localStorage.setItem("basket", JSON.stringify(state.items)); // Sync with localStorage
      }
    },
    deleteFromBasket: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem("basket", JSON.stringify(state.items)); // Sync with localStorage
    },
    clearBasket: (state) => {
      state.items = [];
      localStorage.removeItem("basket"); // Clear from localStorage as well
    },
  },
  // Automatically update totalLength whenever items are changed
  extraReducers: (builder) => {
    builder.addDefaultCase((state) => {
      state.totalLength = state.items.length; // Dynamically derive totalLength
    });
  },
});

export const { addToBasket, deleteFromBasket, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;





















// import { createSlice } from "@reduxjs/toolkit";

// let data =JSON.parse(localStorage.getItem("basket"));

// const initialState = {
//   items: JSON.parse(localStorage.getItem("basket")) || [],
//   totalLength: data == null ? 0 : data.length,
// };

// export const basketSlice = createSlice({
//   name: "basket",
//   initialState,
//   reducers: {
//     addToBasket: (state, action) => {
//       const existItem = state.items.find(item => item.id === action.payload.id);

//       if (existItem) {
//         alert("already exist in the chart");
//       } else {
//         state.items.push(action.payload);
//         localStorage.setItem('basket', JSON.stringify(state.items));
//         let data =JSON.parse(localStorage.getItem("basket"));
//         state.totalLength = data == null ? 0 : data.length; 
//       }
     
//     },
//     deleteFromBasket: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload.id);
//       localStorage.setItem('basket', JSON.stringify(state.items));
//       let data =JSON.parse(localStorage.getItem("basket"));
//       state.totalLength = data == null ? 0 : data.length;  
//     },
//     clearBasket: (state) => {
//       state.items = [];
//       localStorage.removeItem('basket'); 
//     },
//   },
// });

// export const { addToBasket, deleteFromBasket, clearBasket } = basketSlice.actions;
// export default basketSlice.reducer;
