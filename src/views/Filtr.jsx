import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as BookshelfAPI from '../services/bookshelf-api';

const Filtration = () => {
    const [q, setQ] = useState('');
    const [books, setBooks] = useState([]);

    return (
        <div>
            <form action="" onSubmit={(e) => {
                e.preventDefault();
                BookshelfAPI.fetchBooks().then(books => {
                    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(q.toLowerCase()));
                    setBooks(filteredBooks);
                })
            }}>
                <input type="text" placeholder='Serch for books' onChange={(e) => {
                    e.preventDefault();
                    setQ(e.target.value);
                }} />
                <button type='submit'>Search</button>
            </form>
            <ul>
                {books.map(book => <li key={book.id}>
                    <Link to={`books/${book.id}`}>{book.title}</Link>
                </li>)}

            </ul>
        </div>
    );
}

export default Filtration;
