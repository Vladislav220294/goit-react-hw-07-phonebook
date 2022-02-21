import { createAction } from '@reduxjs/toolkit';

const filterContacts = createAction('contacts/filter');
const removeContact = createAction('contacts/delete');
const addContact = createAction('contacts/add');
export default { addContact, removeContact, filterContacts };
