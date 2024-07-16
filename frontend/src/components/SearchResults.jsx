import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getBooks } from '../services/books-service';
import BookCard from './BookCard';
import { Container, Row, Col } from 'react-bootstrap';

// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const result = await getBooks(1, 100);
                const filteredBooks = result //.books.filter(book =>
                    // book.title.toLowerCase().includes(query.toLowerCase()) ||
                    // book.author.toLowerCase().includes(query.toLowerCase())
                    ? result.filter(book =>
                        book.title.toLowerCase().includes(query.toLowerCase()) ||
                        book.author.toLowerCase().includes(query.toLowerCase())
                    )
                    : [];
                //);
                setBooks(filteredBooks);
            } catch (error) {
                console.error('Error fetching books:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBooks();
    }, [query]);

    if (loading) return <div>Loading...</div>;

    return (
        <>
            <Container>
                <h2>Search Results for "{query}"</h2>
                <Row>
                    {books.map((book) => (
                        <Col key={book._id} sm={12} md={6} lg={4} className="mb-4">
                            <Link to={`/books/${book._id}`}>
                                <BookCard book={book} />
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>

    );
}

export default SearchResults;