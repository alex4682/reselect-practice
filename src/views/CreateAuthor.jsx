import React from 'react';
import styles from './Create.module.css';
import * as bookShelfAPI from '../services/bookshelf-api';
import { useState, useEffect } from 'react';

export const CreateAuthor = () => {
    const [q, setQ] = useState('');

    const handleChange = e => {
        setQ(e.target.value);
    };
    return (
        <div>
            <form action="" className={styles.form} onSubmit={(e) =>{
                e.preventDefault();
                e.stopPropagation();
                e.target.reset();
                bookShelfAPI.createAuthor(q).then(() => {
                    setQ('');
                    
                });
            }}>
                <input type="text" placeholder="Author Name" className={styles.input} required onChange={handleChange}/>
                <button type="submit" className={styles.button}>
                    Create Author
                </button>
            </form>
        </div>
    );
}

export default CreateAuthor;
