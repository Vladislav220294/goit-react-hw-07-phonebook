import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { getContacts, addContact, removeContact } from './operations';
import contactsActions from './actions';

const items = createReducer([], {
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [removeContact.fulfilled]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer('', {
  [contactsActions.filterContacts]: (state, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [removeContact.pending]: () => true,
  [removeContact.fulfilled]: () => false,
  [removeContact.rejected]: () => false,
});

const error = createReducer(null, {
  [getContacts.rejected]: (_, { payload }) => payload,
  [getContacts.pending]: () => null,
  [addContact.rejected]: (_, { payload }) => payload,
  [addContact.pending]: () => null,
  [removeContact.rejected]: (_, { payload }) => payload,
  [removeContact.pending]: () => null,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});
