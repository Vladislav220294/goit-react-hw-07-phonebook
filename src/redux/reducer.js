import { createReducer, combineReducers } from '@reduxjs/toolkit';
import contactsActions from './actions';

const items = createReducer(
  JSON.parse(localStorage.getItem('contacts')) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [contactsActions.addContact]: (state, { payload }) => {
      localStorage.setItem('contacts', JSON.stringify([...state, payload]));
      return [...state, payload];
    },
    [contactsActions.removeContact]: (state, { payload }) => {
      localStorage.setItem(
        'contacts',
        JSON.stringify(state.filter(({ id }) => id !== payload))
      );
      return state.filter(({ id }) => id !== payload);
    },
  }
);

const filter = createReducer('', {
  [contactsActions.filterContacts]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
