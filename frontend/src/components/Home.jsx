import React, {useEffect, useState } from 'react';
import { getBooks } from '../services/books-service';
import BookCard from './BookCard';
import { Link } from 'react-router-dom';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchBooks = async () => {
            const books = await getBooks();
            setBooks(books);
        };
        fetchBooks();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Softcovers - Online Bookstore</h1>
            <input
                type="text"
                placeholder="Search for books..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <h2>Categories</h2>
            {/* Categories will go here */}
            <h2>Featured Books</h2>
            <div className='book-list'>

            </div>
            <div className="book-list">
                {filteredBooks.map((book) => (
                    <Link to={`/books/${book.id}`} key={book.id}>
                        <BookCard book={book} />
                    </Link>

                ))}
                
            </div>
            {/* <ul>
                {books.map(book=> (
                    <li key={book.id}>{book.title} by {book.author}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default Home;