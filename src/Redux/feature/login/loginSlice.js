import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const loginUser = createAsyncThunk(
  'login/loginUser',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await axios.get("https://66ffcd724da5bd237552095c.mockapi.io/user");
      const users = res.data;

      const user = users.find(user => user.username === username && user.password === password);

      if (!user) {
        return rejectWithValue('Invalid username or password');  
      }

      return user;  
    } catch (error) {
      return rejectWithValue(error.message || 'Something went wrong');  
    }
  }
);




export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    userInfo: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload; 
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      });
  },
});

export default loginSlice.reducer;