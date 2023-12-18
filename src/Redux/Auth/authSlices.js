import { toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';
import { signIn, signUp, refresh, forgotPassword } from './authThunks';

const initialState = {
  user: {
    name: null,
    email: null,
    goal: null,
    gender: null,
    age: null,
    height: null,
    weight: null,
    activity: null,
    avatarUrl: null,
    BMR: null,
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

const handlePending = (state) => {
  state.error = null;
  state.isLoading = true;
};

const handleRejected = (state, payload) => {
  state.isLoggedIn = false;
  state.isLoading = false;
  state.token = null;
  state.error = payload;
};
  
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        handlePending(state);
      })
      .addCase(signIn.pending, (state) => {
        handlePending(state);
      })
      .addCase(forgotPassword.pending, (state) => {
        handlePending(state);
      })

      .addCase(signUp.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })
      .addCase(forgotPassword.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })
      .addCase(refresh.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })

      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        // state.isLoggedIn = true;
        toast.success(`Successful Registration.`);
      })

      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
        toast.success(`Successful Loginned.`);
      })

      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.isLoading = false;
        toast.success('Request successful');
      });

    // .addCase(checkEmail.fulfilled, (state, { payload }) => {})
    // .addCase(checkEmail.rejected, (state, { payload }) => {})

    //LogOut
    // .addCase(logOut.pending, (state, { payload }) => {})
    // .addCase(logOut.fulfilled, (state, { payload }) => {})
    // .addCase(logOut.rejected, (state, { payload }) => {})

    //CheckEmail
    // .addCase(forgotPassword.pending, () => {
    // })

    //UpdateUser
    // .addCase(updateUser.pending, (state, { payload }) => {})
    // .addCase(updateUser.fulfilled, (state, { payload }) => {})
    // .addCase(updateUser.rejected, (state, { payload }) => {})
  },
});

export const authReducer = authSlice.reducer;
