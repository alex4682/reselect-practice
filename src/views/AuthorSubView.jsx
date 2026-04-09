import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as BookshelfAPI from '../services/bookshelf-api';

export default function AuthorSubView({ authors }) {
  const location = useLocation();
  const { authorId } = useParams();
  const author = authors.find(author => author.id === Number(authorId));
  const [authorBooks, setAuthorBooks] = useState([]);

  useEffect(() => {
    async function fetchAuthorBooks() {
      try {
        const books = await BookshelfAPI.fetchBooks();
        const filteredBooks = books.filter(
          book => book.authorId === Number(authorId),
        );
        setAuthorBooks(filteredBooks);
      } catch (error) {
        console.error('Error fetching author books:', error);
      }
    }

    fetchAuthorBooks();
  }, [authorId]);

  if (!author) {
    return <h2>Автор не знайдено</h2>;
  }

  return (
    <>
      <h2>{author.name}</h2>

      <ul>
        {authorBooks.map(book => (
          <li key={book.id}>
            <Link
              to={{
                pathname: `/books/${book.id}`,
                state: {
                  from: {
                    location,
                    label: 'Назад до автора',
                  },
                },
              }}
            >
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
