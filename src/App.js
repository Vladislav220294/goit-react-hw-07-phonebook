import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { getContacts } from './redux/operations';
import { useEffect } from 'react';

const App = () => {
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <div className="App">
      {error ? (
        <h1>Some issue has occured. Try again later</h1>
      ) : (
        <>
          {' '}
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
};

export default App;
