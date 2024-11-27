import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Check if the username already exists
export const checkUsernameExists = createAsyncThunk(
  'user/checkUsernameExists',
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://66ffcd724da5bd237552095c.mockapi.io/user');
      const existingUser = response.data.find(user => user.username === username);
      
      // If the username exists, return a rejection message
      if (existingUser) {
        return rejectWithValue('Username already exists, please try another one');
      }
      
      return null; // No user found, proceed to signup
    } catch (error) {
      return rejectWithValue('An error occurred while checking the username');
    }
  }
);

// Sign up user after username check
export const signUpUser = createAsyncThunk(
  'user/signUpUser', 
  async (userData, { dispatch, rejectWithValue }) => {
    // First check if the username exists
    const usernameCheck = await dispatch(checkUsernameExists(userData.username));
    
    // If the username already exists, reject the signup
    if (usernameCheck.payload) {
      return rejectWithValue(usernameCheck.payload);
    }
    
    // Proceed to signup if username is available
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
        state.error = action.payload; // Error message from rejected action
      });
  },
});

export default userSlice.reducer;

















// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const signUpUser = createAsyncThunk(
//   'user/signUpUser', 
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('https://66ffcd724da5bd237552095c.mockapi.io/user', userData);
//       return response.data;
//     } catch (error) {
     
//       if (error.response && error.response.data) {
      
//         if (error.response.data.message === 'Username already exists') {
//           return rejectWithValue('Username already exists, please try another one');
//         }
//       }
//       return rejectWithValue(error.response ? error.response.data : 'An unexpected error occurred');
//     }
//   }
// );

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     userInfo: null, 
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(signUpUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(signUpUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.userInfo = action.payload; 
//       })
//       .addCase(signUpUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload; 
//       });
//   },
// });

// export default userSlice.reducer;







