import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getListOfBooks,
  deleteBookByID,
  createBook,
  updateBook,
} from '../../api/http';

export interface Book {
  id: number | string;
  title: string;
  name_of_author: string;
  price_of_book: string;
  cover: string;
}

interface BooksState {
  items: Book[];
  loading: boolean;
  error: string | null;
}

const initialState: BooksState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const books = await new Promise<Book[]>((resolve, reject) => {
        getListOfBooks({
          onSuccess: (data: Book[]) => resolve(data),
          onError: (err: Error) => reject(err),
        });
      });
      return books;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch books');
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (bookId: number | string, { rejectWithValue }) => {
    try {
      await new Promise<void>((resolve, reject) => {
        deleteBookByID({
          itemID: bookId,
          onSuccess: () => resolve(),
          onError: (err: Error) => reject(err),
        });
      });
      return bookId;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to delete book');
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (bookData: Omit<Book, 'id'>, { rejectWithValue }) => {
    try {
      const newBook = await new Promise<Book>((resolve, reject) => {
        createBook({
          body: bookData,
          onSuccess: (data: Book) => resolve(data),
          onError: (err: Error) => reject(err),
        });
      });
      return newBook;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to create book');
    }
  },
);

export const editBook = createAsyncThunk(
  'books/editBook',
  async (
    { id, data }: { id: number | string; data: Omit<Book, 'id'> },
    { rejectWithValue },
  ) => {
    try {
      const updatedBook = await new Promise<Book>((resolve, reject) => {
        updateBook({
          ID: id,
          body: data,
          onSuccess: (response: any) => resolve(response.data || response),
          onError: (err: Error) => reject(err),
        });
      });
      return updatedBook;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to update book');
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      // Fetch books
      .addCase(fetchBooks.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Remove book
      .addCase(removeBook.fulfilled, (state, action) => {
        state.items = state.items.filter(book => book.id !== action.payload);
      })
      // Add book
      .addCase(addBook.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // Edit book
      .addCase(editBook.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          book => book.id === action.payload.id,
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export const { clearError } = booksSlice.actions;
export default booksSlice.reducer;