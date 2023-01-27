
import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts,addContact,removeContact } from "./contacs-operations";
import { nanoid } from "@reduxjs/toolkit";
const initialValue = { items: [], loading: false, error:null,};


const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialValue,
  extraReducers: {
    [fetchContacts.pending]: (store) => { 
      store.loading = true;
    },
    [fetchContacts.fulfilled]: (store, { payload}) => { 
      store.loading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: (store, { payload}) => { 
      store.loading = false;
      store.error = payload;
    },
    [addContact.pending]: (store) => { 
      store.loading = true;
    },
    [addContact.fulfilled]: (store, { payload}) => { 
      store.loading = false;
      store.items.push(payload)
    },
    [addContact.rejected]: (store, { payload}) => { 
      store.loading = false;
      store.error = payload;
    },
    [removeContact.pending]: (store) => { 
      store.loading = true;
    },
    [removeContact.fulfilled]: (store, { payload}) => { 
      store.loading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [removeContact.rejected]: (store, { payload}) => { 
      store.loading = false;
      store.error = payload;
    },
  }
});

export default contactsSlice.reducer;
