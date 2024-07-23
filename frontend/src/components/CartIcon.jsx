import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Badge } from 'react-bootstrap';
import { useCart } from './CartContext';

function CartIcon() {
    const { cart } = useCart();
    return (
        <Nav.Link as={Link} to="/cart">
            <i className="fas fa-shopping-cart cart-icon"></i> Cart
            {cart.length > 0 && <Badge bg="secondary">{cart.length}</Badge>}
        </Nav.Link>
    );
}

export default CartIcon;
