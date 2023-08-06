import { createSlice } from '@reduxjs/toolkit';

const initialFilter = { searchFilter: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    setSearchFilter(state, action) {
      return { ...state, searchFilter: action.payload };
    },
  },
});

export const { setSearchFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
