// import actions from "./contactsSlice";
import * as api from '../shared/api/contacts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { getToken } from './auth/auth-selectors';
import { token } from './auth/auth-operations';
// import { createGlobalStyle } from 'styled-components';

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
      // token.set(tokenRedux);
      // console.log(
      //   'fetch contacts ',
      //   api.instanceContacts.defaults.headers.common
      // );
      token.set(tokenArg);
      console.log(
        'persisted token',
        api.instanceContacts.defaults.headers.common
      );

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
    console.log(data);
    try {
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      console.log('similiar');
      const { contacts } = getState();
      if (isDublicate(data.name, contacts.items)) {
        alert(`${data.name}  is already exist`);
        return false;
      }
    },
  }
);

// export const addContact = createAsyncThunk(
//     "contacts/add",
//     async (data, { rejectWithValue }) => {
//         try {
//             const result = await api.addContact(data);
//             return result;
//         }
//         catch (error) {
//             return rejectWithValue(error);
//         }
//     },
//     {
//         condition: (data, { getState }) => {
//             const { contacts } = getState();
//             if (isDublicate(data, contacts.items)) {
//                 return alert(`${data.name} is already exist`)
//             }
//         }
//     }

// );

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

// export const fetchContacts = () => {
//     const func = async (dispatch) => {
//         dispatch(actions.fetchContactsLoading());
//         try {
//             const data = await api.getContacts();
//             dispatch(actions.fetchContactsSucces(data))
//         } catch (error) {
//             dispatch(actions.fetchContactsError(error));
//         }
//      }
//     return func;
// }
