import style from './Contact.module.css';
import propTypes from 'prop-types';
import { FiX } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { deletedContact } from 'redux/sliceContacts';

const Contact = ({ elem }) => {
  const dispatch = useDispatch()

  return (
    <li className={style.li}>
      {elem.name}: {elem.numberTel}
      <button onClick={() => dispatch(deletedContact(elem.id))}>
        <FiX className={style.svgFix} />
      </button>
    </li>
  );
};

Contact.propTypes = {
  elem: propTypes.object,
};

export default Contact;
