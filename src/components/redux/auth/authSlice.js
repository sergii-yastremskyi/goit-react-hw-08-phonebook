import { createSlice } from '@reduxjs/toolkit';
import { signUp, logOut, logIn, fetchCurrentUser } from './auth-operations';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'authInfo',
  version: 1,
  storage,
  whitelist: ['token'],
};

const initialValue = {
  user: {},
  token: '',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialValue,
  extraReducers: {
    [signUp.pending]: store => {
      store.loading = true;
    },
    [signUp.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
    },
    [signUp.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [logOut.pending]: store => {
      store.loading = true;
    },
    [logOut.fulfilled]: store => {
      store.loading = false;
      store.token = '';
      store.user = {};
    },
    [logOut.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [logIn.pending]: store => {
      store.loading = true;
    },
    [logIn.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
    },
    [logIn.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [fetchCurrentUser.fulfilled]: (store, { payload }) => {
      store.user = { ...payload };
      store.loading = false;
    },
    [fetchCurrentUser.pending]: store => {
      store.loading = true;
    },
    [fetchCurrentUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
