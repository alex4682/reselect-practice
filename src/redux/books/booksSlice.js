import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchBooks } from "./booksOperations";

export const booksAdapter = createEntityAdapter({
  selectId: (book) => book.id,
});

const initialState = booksAdapter.getInitialState({
  loading: false,
  error: null,
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        booksAdapter.setAll(state, action.payload);
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  selectAll: selectAllBooks,
  selectById: selectBookById,
  selectIds: selectBookIds,
} = booksAdapter.getSelectors((state) => state.books);

export default booksSlice;