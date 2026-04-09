import React from 'react';
import * as bookShelfAPI from '../services/bookshelf-api';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Create.module.css';
import { Link } from 'react-router-dom';

const CreateBook = () => {
    const dispatch = useDispatch();
    const [authors, setAuthors] = useState([]);
    const [title, setTitle] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [genre, setGenre] = useState('');
    const [descr, setDescr] = useState('');
    const [authorId, setAuthorId] = useState(1);
    const [id, setId] = useState(null);
    const books = bookShelfAPI.fetchBooks().then(books => setId(Number(books.length + 1)));

    useEffect(() => {
        bookShelfAPI.fetchAuthors().then(setAuthors);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(bookShelfAPI.createBook({title, imgUrl, genre, descr, authorId })).then(() => {
            setTitle('');
            setImgUrl('');
            setGenre('');
            setDescr('');
            setAuthorId(1);
            e.target.reset();
        });
    };

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="Book Title" className={styles.input} required onChange={(e) => {
                    setTitle(e.target.value);
                }} />
                <input type="text" placeholder="Image Url" className={styles.input} required onChange={(e) => {
                    setImgUrl(e.target.value);
                }} />
                <input type="text" placeholder="Genre" className={styles.input} required onChange={(e) => {
                    setGenre(e.target.value);
                }} />
                <input type="text" placeholder="Description" className={styles.input} required onChange={(e) => {
                    setDescr(e.target.value);
                }} />

                <select key={1} name="author" id="author" className={styles.select} value={authorId} required onChange={(e) => {
                    setAuthorId(parseInt(e.target.value));
                }}>
                    {authors.map(author => (
                        <option key={author.id} value={author.id}>{author.name}</option>
                    ))}
                </select>
                <p className={styles.description}>
                    Якщо автор не існує, додайте нового <Link to="/create/author">тут</Link>.
                </p>

                <button type="submit" className={styles.button}>
                    Create Book
                </button>
            </form>
        </div>
    );
}

export default CreateBook;
