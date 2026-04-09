import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/booksSlice';

export const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
  },
});
