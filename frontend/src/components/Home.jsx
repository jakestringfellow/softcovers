import React, {useEffect, useState } from 'react';
import { getBooks } from '../services/books-service';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const books = await getBooks();
            setBooks(books);
        };
        fetchBooks();
    }, []);

    return (
        <div>
            <h1>Softcovers - Online Bookstore</h1>
            <h2>Featured</h2>
            <ul>
                {books.map(book=> (
                    <li key={book.id}>{book.title} by {book.author}</li>
                ))}
            </ul>
        </div>
    )
}

export default Home;