import PropTypes from 'prop-types';
import css from './contact.module.css';
import { removeContact } from '../redux/contacs-operations';
import { useSelector, useDispatch } from 'react-redux';

const Contact = ({ data, onDelete }) => {
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(removeContact(id));
  };
  return (
    <li>
      <span className={css.name}>{data.name}:</span>
      <span className={css.number}>{data.number}</span>
      <div style={{ flexGrow: 1 }} />
      <button
        id={data.id}
        onClick={e => handleDelete(data.id)}
        type="button"
        className={css.button}
      >
        Delete
      </button>
    </li>
  );
};
// Contact.propTypes = {
//   data: PropTypes.shape({
//     name: PropTypes.string,
//     phone: PropTypes.string,
//   }),
// };
export default Contact;
