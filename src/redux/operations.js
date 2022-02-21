import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContactsApi, addContactsApi, removeContactsApi } from '../fetch';

export const getContacts = createAsyncThunk(
  'contacts/get',
  async (_, thunkApi) => {
    try {
      const contacts = await getContactsApi();

      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (newContact, thunkApi) => {
    try {
      await addContactsApi(newContact);
      return newContact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, thunkApi) => {
    try {
      await removeContactsApi(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
