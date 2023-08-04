import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from '../components/App/App.module.css';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';
import { fetchContacts, addContact } from '../redux/operations';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const onSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;

    if (contacts.filter(el => el.name === name).length > 0) {
      window.alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, phone }));
      form.reset();
    }
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />
      <div className={css['contacts-wrapper']}>
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        {isLoading && error === null && (
          <div>We are loading your contacts...</div>
        )}
        {!isLoading && error === null && <ContactList />}
        {error !== null && <div>Ooops, error... {error}</div>}
      </div>
    </>
  );
};
