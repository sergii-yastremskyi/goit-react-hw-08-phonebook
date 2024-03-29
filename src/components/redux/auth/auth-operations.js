// import actions from "./contactsSlice";
import * as api from '../../shared/api/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../../shared/api/contacts';
import { instanceContacts } from '../../shared/api/contacts';
import { useDispatch } from 'react-redux';
export const token = {
  set(token) {
    api.instanceAuth.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${token}`;
    instanceContacts.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${token}`;
  },
  unset() {
    api.instanceAuth.defaults.headers.common['Authorization'] = '';
    instanceContacts.defaults.headers.common['Authorization'] = '';
  },
};

// export const clearError = () => {
//   const dispatch = useDispatch();
//   dispatch();
// };
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (data, thunkApi) => {
    try {
      const res = await api.signUp(data);

      token.set(res.token);

      return res;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkApi) => {
  try {
    const res = await api.logOut();
    token.unset();
    return res;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const logIn = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkApi) => {
    try {
      const res = await api.logIn(credentials);
      token.set(res.token);

      return res;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const store = thunkAPI.getState();
    const persistedToken = store.auth.token;

    if (persistedToken === '') {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await api.instanceAuth.get('/users/current');

      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  }
);
