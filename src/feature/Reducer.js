import { createSlice } from "@reduxjs/toolkit";

export const reducerSlice = createSlice({
  name: "contacts",
  initialState: {
    value: [],
    bool: false,
    isFiltering: false,
    filtered: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.value.push(action.payload);
    },
    editContact: (state, action) => {
      state.value = state.value.map((contact) => {
        if (contact.id === action.payload.id) {
          return action.payload;
        }
        return contact;
      });
    },
    isEdit: (state, action) => {
      state.bool = action.payload;
    },
    deleteContact: (state, action) => {
      state.value = state.value.filter(
        (contact) => contact.phone !== action.payload
      );
    },
    searchHandler: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.isFiltering = true;
      state.filtered = state.value.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm)
      );
    },
    clearSearch: (state) => {
      state.isFiltering = false;
      state.filtered = [];
    },
  },
});

export const {
  addContact,
  editContact,
  isEdit,
  deleteContact,
  searchHandler,
  clearSearch,
} = reducerSlice.actions;
export default reducerSlice.reducer;
