// import actions from "./contactsSlice";
import * as api from '../shared/api/contacts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { getToken } from './auth/auth-selectors';
import { token } from './auth/auth-operations';
const isDublicate = (name, contacts) => {
  const normalizedName = name.toLowerCase();

  const resault = contacts.find(item => {
    return normalizedName === item.name.toLowerCase();
  });
  return Boolean(resault);
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (tokenArg, thunkApi) => {
    try {
      token.set(tokenArg);

      const data = await api.getContacts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    // condition: (data, { getState }) => {
    //   const { contacts } = getState();
    //   if (isDublicate(data.name, contacts.items)) {
    //     alert(`${data.name}  is already exist`);
    //     return false;
    //   }
    // },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
      await api.removeContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
