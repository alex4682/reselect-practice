import { useState, useEffect, use } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import * as bookShelfAPI from '../services/bookshelf-api';

export default function BookDetailsView() {
  const location = useLocation();
  const { slug } = useParams();
  const bookId = slug.match(/[a-z0-9]+$/)[0];
  const [book, setBook] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchBookById(bookId).then(setBook);
  }, [bookId]);

  useEffect(() => {
    if (book?.authorId) {
      bookShelfAPI.fetchAuthorById(book.authorId).then(setAuthor);
    }
  }, [book?.authorId]);

  return (
    <>
      <PageHeading text={`Книга ${slug}`} />

      {book && (
        <>
          <Link to={location?.state?.from?.location ?? '/books'}>
            {location?.state?.from?.label ?? 'Назад'}
          </Link>
          <hr />

          <img src={book.imgUrl} alt={book.title} />
          <h2>{book.title}</h2>
          <p>Автор: {author?.name || 'Невідомий автор'}</p>
          <p>{book.descr}</p>
        </>
      )}
    </>
  );
}
