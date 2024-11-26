import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: [],
};

export const getProduct = createAsyncThunk("getProduct", async () => {
  const { data } = await axios.get("https://66ffcd724da5bd237552095c.mockapi.io/products");
  return data;
});


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

export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (id) => {
    await axios.delete(`https://66ffcd724da5bd237552095c.mockapi.io/products/${id}`);
    return id;
  }
);


export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getProduct.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.value.findIndex((product) => product.id === action.payload.id);
        if (index !== -1) {
          state.value[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {

        state.value = state.value.filter((product) => product.id !== action.payload);
      });
  },
});

export default productSlice.reducer;


