import React, { useState } from 'react';
import { useCart } from './CartContext';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {
    const { cart, dispatch } = useCart();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const order = {
            books: cart,
            name,
            email,
            address,
            total: cart.reduce((sum, book) => sum + book.price, 0)
        };

        try {
            await axios.post('http://localhost:3000/api/orders', order);
            dispatch({ type: 'CLEAR_CART' });
            navigate('/');
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };

    return (
        <Container>
            <h2>Checkout</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </Form.Group>
                <h3>Order Summary</h3>
                <ul>
                    {cart.map((book) => (
                        <li key={book._id}>{book.title} - ${book.price}</li>
                    ))}
                </ul>
                <h3>Total: ${cart.reduce((sum, book) => sum + book.price, 0)}</h3>
                <Button variant="primary" type="submit">
                    Place Order
                </Button>
            </Form>
        </Container>
    );
};

export default Checkout;