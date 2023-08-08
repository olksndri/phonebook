import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setSearchFilter } from '../../redux/contacts/filterSlice';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Filter = () => {
  const dispatch = useDispatch();

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
