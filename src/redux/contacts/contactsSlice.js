import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialContacts = {
  items: [],
  isLoading: false,
  error: null,
};

const pendingHandler = state => {
  state.isLoading = true;
};
const rejectedHandler = (state, action) => {
  state.isLoading = true;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,

  extraReducers: {
    [fetchContacts.pending]: pendingHandler,
    [addContact.pending]: pendingHandler,
    [deleteContact.pending]: pendingHandler,
    [fetchContacts.rejected]: rejectedHandler,
    [addContact.rejected]: rejectedHandler,
    [deleteContact.rejected]: rejectedHandler,

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const id = action.payload.id;
      const index = state.items.findIndex(el => el.id === id);
      state.items.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
