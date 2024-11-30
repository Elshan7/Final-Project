import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const checkUsernameExists = createAsyncThunk(
  'user/checkUsernameExists',
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://66ffcd724da5bd237552095c.mockapi.io/user');
      const existingUser = response.data.find(user => user.username === username);
      
      
      if (existingUser) {
        return rejectWithValue('Username already exists, please try another one');
      }
      
      return null; 
    } catch (error) {
      return rejectWithValue('An error occurred while checking the username');
    }
  }
);

export const signUpUser = createAsyncThunk(
  'user/signUpUser', 
  async (userData, { dispatch, rejectWithValue }) => {
   
    const usernameCheck = await dispatch(checkUsernameExists(userData.username));
    
   
    if (usernameCheck.payload) {
      return rejectWithValue(usernameCheck.payload);
    }
    
  
    try {
      const response = await axios.post('https://66ffcd724da5bd237552095c.mockapi.io/user', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : 'An unexpected error occurred');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null, 
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      });
  },
});

export default userSlice.reducer;








