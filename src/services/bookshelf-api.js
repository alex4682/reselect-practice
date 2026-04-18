import axios from 'axios';
import { string } from 'prop-types';

axios.defaults.baseURL = 'https://69d0ece490cd06523d5da6f0.mockapi.io/books';

export async function fetchBooks() {
  try {
    const response = await axios.get('/books');
    const booksWithIntIds = response.data.map(book => ({ ...book, id: parseInt(book.id) }));
    console.log(booksWithIntIds);
    return booksWithIntIds;
  } 
  catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
}

export async function fetchAuthors() {
  try {
    const response = await axios.get('/authors');
    const authorsWithIntIds = response.data.map(author => ({ ...author, id: parseInt(author.id) }));
    return authorsWithIntIds;
  } catch (error) {
    console.error('Error fetching authors:', error);
    throw error;
  }
}

export async function fetchBookById(id) {
  try {
    const response = await axios.get(`/books`);
    const book = response.data.find((book) => parseInt(book.id) === parseInt(id));
    console.log(book);
    if (!book) {
      throw new Error(`Book with id ${id} not found`);
    }
    return { ...book, id: parseInt(book.id) };
  } catch (error) {
    console.error(`Error fetching book with id ${id}:`, error);
    throw error;
  }
}

export async function fetchAuthorById(id) {
  try {
    const response = await axios.get(`/authors`);
    const author = response.data.find((author) => parseInt(author.id) === parseInt(id));
    if (!author) {
      throw new Error(`Author with id ${id} not found`);
    }
    return { ...author, id: parseInt(author.id) };
  } catch (error) {
    console.error(`Error fetching author with id ${id}:`, error);
    throw error;
  }
}

export async function createAuthor(authorName) {
  try {
    const authors = await fetchAuthors();
    const response = await axios.post('/authors', { id: authors.length + 1, name: authorName });
    return { ...response.data, id: parseInt(response.data.id) };
  } catch (error) {
    console.error('Error creating author:', error);
    throw error;
  }
}

export async function createBook(bookData) {
  try {
    const response = await axios.post('/books',  bookData);
    return response.data;
  } catch (error) {
    console.error('Error creating book:', error);
    throw error;
  }
}