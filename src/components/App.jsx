import {Form} from './Form/Form';
import Title from './Title/Title';
import style from './App.module.css';
import ContactList from './ContactList/ContactList';
import NotContacts from './NotContacts/NotContacts';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { apdateInitialContacts } from 'redux/sliceContacts';

const App = () => {
  const listContacts = useSelector(state => state.items);
  const dispatch = useDispatch()

  // тут я работаю с жизнеными циклами и проверяю локалку при рендере страницы
  useEffect(() => {
    const lCont = localStorage.getItem('contacts');
    if (lCont) {
      dispatch(apdateInitialContacts(JSON.parse(lCont)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(listContacts));
  }, [listContacts]);

  return (
    <div className={style.conteiner}>
      <Title text={'Phonebook'} />
      <Form/>
      <Title text={'Contacts'} />

      {listContacts.length < 1 ? (
        <NotContacts text={'The contact list is currently empty'} />
      ) : (
        <ContactList/>
      )}
    </div>
  );
};
export default App;
