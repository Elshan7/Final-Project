import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk(
  'login/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://66ffcd724da5bd237552095c.mockapi.io/user');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch users');
    }
  }
);

// Async thunk for logging in a user
export const loginUser = createAsyncThunk(
  'login/loginUser',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://66ffcd724da5bd237552095c.mockapi.io/user');
      const users = response.data;
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

// Async thunk for updating a user
export const updateUser = createAsyncThunk(
  'login/updateUser',
  async (updatedUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `https://66ffcd724da5bd237552095c.mockapi.io/user/${updatedUser.id}`,
        updatedUser
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to update user');
    }
  }
);

// Async thunk for deleting a user from the backend
export const deleteUser = createAsyncThunk(
  'login/deleteUser',
  async (userId, { rejectWithValue }) => {
    try {
      await axios.delete(`https://66ffcd724da5bd237552095c.mockapi.io/user/${userId}`);
      return userId; // Return the userId so we can remove it from the state
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to delete user');
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    userInfo: null,
    usersList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Login user cases
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
      })

      // Fetch users cases
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.usersList = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update user case
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.usersList.findIndex(user => user.id === action.payload.id);
        if (index !== -1) {
          state.usersList[index] = action.payload;
        }
      })

      // Delete user cases
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        // Remove user from the state after successful API deletion
        state.usersList = state.usersList.filter(user => user.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default loginSlice.reducer;

























// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';


// export const fetchUsers = createAsyncThunk(
//   'login/fetchUsers',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get('https://66ffcd724da5bd237552095c.mockapi.io/user');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message || 'Failed to fetch users');
//     }
//   }
// );


// export const loginUser = createAsyncThunk(
//   'login/loginUser',
//   async ({ username, password }, { rejectWithValue }) => {
//     try {
//       const response = await axios.get('https://66ffcd724da5bd237552095c.mockapi.io/user');
//       const users = response.data;
//       const user = users.find(user => user.username === username && user.password === password);

//       if (!user) {
//         return rejectWithValue('Invalid username or password');
//       }

//       return user;
//     } catch (error) {
//       return rejectWithValue(error.message || 'Something went wrong');
//     }
//   }
// );

// export const updateUser = createAsyncThunk(
//   'login/updateUser',
//   async (updatedUser, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.put(
//         `https://66ffcd724da5bd237552095c.mockapi.io/user/${updatedUser.id}`,
//         updatedUser
//       );
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message || 'Failed to update user');
//     }
//   }
// );

// const loginSlice = createSlice({
//   name: 'login',
//   initialState: {
//     userInfo: null,
//     usersList: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {

//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.userInfo = action.payload;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })


//     builder
//       .addCase(fetchUsers.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.loading = false;
//         state.usersList = action.payload;
//       })
//       .addCase(fetchUsers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });


//     builder
//       .addCase(updateUser.fulfilled, (state, action) => {

//         const index = state.usersList.findIndex(user => user.id === action.payload.id);
//         if (index !== -1) {
//           state.usersList[index] = action.payload;
//         }
//       });
//   },
// });

// export default loginSlice.reducer;


