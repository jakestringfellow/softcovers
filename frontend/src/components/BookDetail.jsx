import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../services/books-service';
import { Container, Card, Button, Col } from 'react-bootstrap';
import { useCart } from './CartContext';


function BookDetail() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const { dispatch } = useCart();

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

    const addToCart = () => {
        dispatch({ type: 'ADD_TO_CART', book });
    };

    if (loading) return <div>Loading...</div>;
    if (!book) return <div>Book not found</div>;

    return (
        <>
            <Container className="my-4">
                <Card>
                    <div className="row">
                        <div className="col-2">
                        <Card.Img variant="left" className="img-fluid" src={book.image_url} />

                        </div>
                        <div className="col-8">
                        <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Author: {book.author}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Genre: {book.category}</Card.Subtitle>
                        <Card.Text>Description: {book.description}</Card.Text>
                        <Card.Text>Price: ${book.price}</Card.Text>
                        <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
                    </Card.Body>
                        </div>
                    </div>
                    
                    
                </Card>
            </Container>
        
        </>
       
    );
}

export default BookDetail;