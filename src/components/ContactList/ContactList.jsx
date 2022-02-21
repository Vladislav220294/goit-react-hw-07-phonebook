import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions from '../../redux/actions';
import s from './ContactList.module.css';

const ContactList = () => {
  const { items, filter } = useSelector(state => state.contacts);
  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));
  
  const dispatch = useDispatch();
  const removeContact =  id => dispatch(contactsActions.removeContact(id))
  return (
    <ul className={s.list}>
      {visibleContacts.map(el => (
        <li className={s.item} key={el.id}>
          <h3 className={s.name}>{el.name}</h3>
          <p className={s.number}>{el.number}</p>
          <button
            className={s.buttom}
            type="button"
            onClick={() => removeContact(el.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  removeContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};