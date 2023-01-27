import Contact from '../contact';
import { getToken } from '../redux/auth/auth-selectors';
import css from './contactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  addContact,
  removeContact,
} from '../redux/contacs-operations';
import { getContacts, getFilter, getLoader } from '../redux/selectors';
import { useEffect } from 'react';
import { Audio } from 'react-loader-spinner';
import { instanceContacts } from '../shared/api/contacts';
const ContactsList = () => {
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('contactlist', token);
    dispatch(fetchContacts(token));
  }, []);

  const contacts = useSelector(getContacts);
  const loader = useSelector(getLoader);
  const filter = useSelector(getFilter);
  // console.log(loader);
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <div className="container">
      {!loader ? (
        <ul className={css.contactList}>
          {visibleContacts.map(contact => (
            <Contact key={contact.id} data={contact} />
          ))}
        </ul>
      ) : (
        <Audio
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="audio-loading"
          wrapperStyle={{}}
          wrapperClass={css.loader}
          visible={true}
        />
      )}
    </div>
  );
};

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       phone: PropTypes.string,
//     }),
//   ),
//   onDelete: PropTypes.func,
// };

export default ContactsList;
