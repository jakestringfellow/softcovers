import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './components/Home';
import BookDetail from './components/BookDetail';
import SearchResults from './components/SearchResults';
import Cart from './components/Cart';
import CartIcon from './components/CartIcon';
import Checkout from './components/Checkout';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { CartProvider, useCart } from './components/CartContext';
import './index.css'; 


function App() {

  return (
    <>
      <CartProvider>

        <Router>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand as={Link} to="/">Softcovers</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav>
                <CartIcon />
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container className="my-4">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books/:id" element={<BookDetail />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Container>
        </Router>
      </CartProvider>

    </>

  )
}

export default App;