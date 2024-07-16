import React from 'react';
import { Card } from 'react-bootstrap';

function BookCard({ book }) {
    return (
        // <div className="book-card">
        //     <h3>{book.title}</h3>
        //     <p>Author: {book.author}</p>
        //     <p>Price: ${book.price}</p>
        //     <p>Genre: {book.genre.join(', ')}</p>
        // </div>

        <Card className="h-100">
            <Card.Img variant="top" src={book.imageUrl} />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Author: {book.author}</Card.Subtitle>
                <Card.Text>Genre: {book.category}</Card.Text>
                <Card.Text>Description: {book.description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BookCard;