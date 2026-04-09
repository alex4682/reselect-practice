import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/bookshelf-api';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      return await api.fetchBooks();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

