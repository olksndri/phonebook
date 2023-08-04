import { useDispatch } from 'react-redux';
import { setSearchFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onInput = evt => {
    const value = evt.target.value;
    dispatch(setSearchFilter(value));
  };

  return (
    <>
      <label htmlFor="filter-input">Search contacts by name</label>
      <input type="text" id="filter-input" onInput={onInput} />
    </>
  );
};
