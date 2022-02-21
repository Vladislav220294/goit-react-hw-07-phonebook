import { configureStore } from '@reduxjs/toolkit';
import contactsReduer from './reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = configureStore({
  reducer: {
    contacts: contactsReduer,
  },
});

export default store;
