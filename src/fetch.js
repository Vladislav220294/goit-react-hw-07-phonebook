import axios from 'axios';

axios.defaults.baseURL = 'https://62138ad489fad53b1ff869e0.mockapi.io/api/v1';

export const getContactsApi = async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return error;
  }
};
export const addContactsApi = async newContact => {
  try {
    const { data } = await axios.post('/contacts', newContact);
    return data;
  } catch (error) {
    return error;
  }
};
export const removeContactsApi = async id => {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    return error;
  }
};
