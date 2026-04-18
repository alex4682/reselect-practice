import { createEntityAdapter } from "@reduxjs/toolkit";

export const booksAdapter = createEntityAdapter();

export const {
  selectAll: getBooks, 
  selectById: getBookById,
} = booksAdapter.getSelectors((state) => state.books || {}); 