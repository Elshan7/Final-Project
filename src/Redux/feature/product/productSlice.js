// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   value: [],
// };

// export const getProduct = createAsyncThunk("getProduct", async () => {
//   const { data } = await axios.get("https://66ffcd724da5bd237552095c.mockapi.io/products");
//   return data;
// });


// export const updateProduct = createAsyncThunk(
//   "updateProduct",
//   async (updatedProduct) => {
//     const { data } = await axios.put(
//       `https://66ffcd724da5bd237552095c.mockapi.io/products/${updatedProduct.id}`,
//       updatedProduct
//     );
//     return data;
//   }
// );

// export const productSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder

//       .addCase(getProduct.fulfilled, (state, action) => {
//         state.value = action.payload;
//       })
//       .addCase(updateProduct.fulfilled, (state, action) => {
//         const index = state.value.findIndex((product) => product.id === action.payload.id);
//         if (index !== -1) {
//           state.value[index] = action.payload;
//         }
//       });
//   },
// });

// export default productSlice.reducer;












import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    value: [],
}

export const getProduct = createAsyncThunk("getProduct", async () => {
    const {data} = await axios.get("https://66ffcd724da5bd237552095c.mockapi.io/products")
    return data
})

export const productSlice = createSlice ({
    name: "product",
    initialState,
    reducers: {

    },
    extraReducers: (payload) => {

        payload.addCase(getProduct.fulfilled, (state,action) => {
            state.value = action.payload
            
        })
    }
})



export default productSlice.reducer