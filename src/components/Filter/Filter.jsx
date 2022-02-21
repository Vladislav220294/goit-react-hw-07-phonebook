import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/actions';

const Filter = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const onChange = (e)=> dispatch(contactsActions.filterContacts(e.target.value))
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
};
