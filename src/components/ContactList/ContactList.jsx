import css from '../App/App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectSearchFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectSearchFilter);
  const dispatch = useDispatch();

  const onDelete = evt => {
    dispatch(deleteContact(evt.target.id));
  };

  return (
    <>
      <ul className={css['contacts-list']}>
        {filter === ''
          ? contacts.map(el => {
              return (
                <li key={el.id} className={css['contacts-list-item']}>
                  <span>
                    {el.name}: {el.number}
                  </span>
                  <button type="button" onClick={onDelete} id={el.id}>
                    Delete
                  </button>
                </li>
              );
            })
          : contacts.map(el => {
              if (el.name.toLowerCase().includes(filter.toLowerCase().trim())) {
                return (
                  <li key={el.id} className={css['contacts-list-item']}>
                    <span>
                      {el.name}: {el.number}
                    </span>
                    <button type="button" onClick={onDelete} id={el.id}>
                      Delete
                    </button>
                  </li>
                );
              }
              return <></>;
            })}
      </ul>
    </>
  );
};
