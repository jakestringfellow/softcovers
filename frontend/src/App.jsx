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
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {

  return (
    <>
     
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">Softcovers</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="my-4">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books/:id" element={<BookDetail/>} />
            <Route path="/search" element={<SearchResults/>} />
          </Routes>
        </Container>
      </Router>
    </>

  )
}

export default App;