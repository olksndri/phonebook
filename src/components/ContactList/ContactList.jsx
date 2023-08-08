import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectSearchFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectSearchFilter);
  const dispatch = useDispatch();

  const onDelete = evt => {
    dispatch(deleteContact(evt.currentTarget.id));
  };

  const listItem = el => {
    return (
      <li key={el.id} className={css['contacts-list-item']}>
        <span>
          {el.name}: <a href={`tel:${el.number}`}>{el.number}</a>
        </span>

        <IconButton
          onClick={onDelete}
          id={el.id}
          sx={{
            width: '24px',
            height: '24px',
            backgroundColor: 'transparent',
          }}
        >
          <DeleteIcon
            sx={{
              fill: 'white',
              '&:hover': {
                fill: 'var(--accent-grey)',
              },
            }}
          />
        </IconButton>
      </li>
    );
  };

  return (
    <>
      <ul className={css['contacts-list']}>
        {filter === ''
          ? contacts.map(el => {
              return listItem(el);
            })
          : contacts.map(el => {
              if (el.name.toLowerCase().includes(filter.toLowerCase().trim())) {
                return listItem(el);
              }
              return <></>;
            })}
      </ul>
    </>
  );
};
