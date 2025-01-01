import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: [],
};

// Fetch all products
export const getProduct = createAsyncThunk("getProduct", async () => {
  const { data } = await axios.get(
    "https://66ffcd724da5bd237552095c.mockapi.io/products"
  );
  return data;
});

// Add a new product
export const addProduct = createAsyncThunk("addProduct", async (newProduct) => {
  const { data } = await axios.post(
    "https://66ffcd724da5bd237552095c.mockapi.io/products",
    newProduct
  );
  return data;
});

// Update an existing product
export const updateProduct = createAsyncThunk(
  "updateProduct",
  async (updatedProduct) => {
    const { data } = await axios.put(
      `https://66ffcd724da5bd237552095c.mockapi.io/products/${updatedProduct.id}`,
      updatedProduct
    );
    return data;
  }
);

// Delete a product
export const deleteProduct = createAsyncThunk("deleteProduct", async (id) => {
  await axios.delete(
    `https://66ffcd724da5bd237552095c.mockapi.io/products/${id}`
  );
  return id;
});

// Product slice
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetching products
      .addCase(getProduct.fulfilled, (state, action) => {
        state.value = action.payload;
      })

      // Handle adding a product
      .addCase(addProduct.fulfilled, (state, action) => {
        state.value.push(action.payload); // Add the new product to the state
      })

      // Handle updating a product
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.value.findIndex(
          (product) => product.id === action.payload.id
        );
        if (index !== -1) {
          state.value[index] = action.payload;
        }
      })

      // Handle deleting a product
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.value = state.value.filter(
          (product) => product.id !== action.payload
        );
      });
  },
});

export default productSlice.reducer;


















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

// export const deleteProduct = createAsyncThunk(
//   "deleteProduct",
//   async (id) => {
//     await axios.delete(`https://66ffcd724da5bd237552095c.mockapi.io/products/${id}`);
//     return id;
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
//       })
//       .addCase(deleteProduct.fulfilled, (state, action) => {

//         state.value = state.value.filter((product) => product.id !== action.payload);
//       });
//   },
// });

// export default productSlice.reducer;


