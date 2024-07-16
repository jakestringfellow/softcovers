import React, { useEffect, useState } from 'react';
import { getFeaturedBooks } from '../services/books-service';
import BookCard from './BookCard';
import { Link, useNavigate } from 'react-router-dom';
// import { searchBooks } from '../services/books-service';
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';

const Home = () => {
    const [featuredBooks, setFeaturedBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        // setSearchTerm(e.target.value);
        setSearchTerm(e.target.value);
        // if (e.target.value.length > 1) {
        //     const results = await searchBooks(e.target.value);
        //     setBooks(results);
        // } else {
        //     setBooks([]);
        // }
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?q=${searchTerm}`);
        }
    }

    useEffect(() => {
        const fetchFeaturedBooks = async () => {
            const response = await getFeaturedBooks();
            setFeaturedBooks(response);
        };
        fetchFeaturedBooks();
    }, []);



    const filteredBooks = featuredBooks.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <h1 className="my-4">Softcovers - Online Bookstore</h1>
            <Form className="mb-4" onSubmit={handleSearchSubmit}>
                <FormControl
                    type="text"
                    placeholder="Search for books..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </Form>
            {/* <input
                type="text"
                placeholder="Search for books..."
                value={searchTerm}
                onChange={handleSearch}
            /> */}
            <h2 className="mb-4">Featured Books</h2>
            {/* Categories will go here */}
            <Row>
                {featuredBooks.map((book) => (
                    <Col key={book._id} sm={12} md={6} lg={4} className="mb-4">
                        <Link to={`/books/${book._id}`} key={book._id}>
                            <BookCard book={book} />
                        </Link>
                    </Col>

                ))}

            </Row>
            {/* <div className="book-list">
                {filteredBooks.map((book) => (
                    <Link to={`/books/${book.id}`} key={book.id}>
                        <BookCard book={book} />
                    </Link>

                ))}
                
            </div> */}
            {/* <ul>
                {books.map(book=> (
                    <li key={book.id}>{book.title} by {book.author}</li>
                ))}
            </ul> */}
        </Container>
    )
}

export default Home;