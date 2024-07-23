import React from 'react';
import { useCart } from './CartContext';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, dispatch } = useCart();

    const total = cart.reduce((sum, book) => sum + book.price, 0);

    const removeFromCart = (bookId) => {
        dispatch({ type: 'REMOVE_FROM_CART', bookId});
    };

    return (
        <Container>
            <h2>Your Cart</h2>
            <Row>
                {cart.map((book) => (
                    <Col key={book._id} sm={12} md={6} lg={4} className="mb-4">
                        <div className="cart-item">
                            <h4>{book.title}</h4>
                            <p>Author: {book.author}</p>
                            <p>Price: ${book.price}</p>
                            <Button variant="danger" onClick={() => removeFromCart(book._id)}>Remove</Button>
                        </div>
                    </Col>
                ))}
            </Row>
            <h3>Total: ${total}</h3>
            <Link to="/checkout">
                <Button variant="primary">Checkout</Button>
            </Link>
        </Container>
    );
};

export default Cart;
