import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchFilter } from '../../redux/contacts/filterSlice';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { selectContacts } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onInput = evt => {
    const value = evt.target.value;
    dispatch(setSearchFilter(value));
  };

  return (
    <div className={css.wrap}>
      <label htmlFor="filter-input" className={css.search}>
        Search contacts by name
      </label>
      <TextField
        type="text"
        id="filter-input"
        onInput={onInput}
        disabled={contacts.length === 0}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
