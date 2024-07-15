import React from 'react';

function BookCard({ book }) {
    return (
        <div className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
            <p>Genre: {book.genre.join(', ')}</p>
        </div>
    )
}

export default BookCard;