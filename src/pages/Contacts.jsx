import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/contacts/selectors';
import { fetchContacts, addContact } from '../redux/contacts/operations';
import Container from '@mui/material/Container';
import { styled } from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 12px;
  color: black;
  font-weight: 500;
`;

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const onSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contacts.filter(el => el.name === name).length > 0) {
      window.alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, number }));
      form.reset();
    }
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container sx={{ paddingTop: '20px' }}>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={onSubmit} />
      <div>
        <Filter />
        {isLoading && error === null && (
          <div>We are loading your contacts...</div>
        )}
        {!isLoading && error === null && <ContactList />}
        {error !== null && <div>Ooops, error... {error}</div>}
      </div>
    </Container>
  );
};
