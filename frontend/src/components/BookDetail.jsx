import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../services/books-service';

function BookDetail() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const book = await getBookById(id);
                setBook(book);
            } catch (error) {
                console.error('Error fetching book:', error);
            } finally {
                setLoading(false);
            }
            
        };
        fetchBook();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!book) return <div>Book not found</div>;

    return (
        <div className="book-detail">
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
            <p>Genre {book.genre.join(', ')}</p>
            <p>Description: {book.descriptoin}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default BookDetail;