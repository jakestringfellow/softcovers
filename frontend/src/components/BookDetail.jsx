import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../services/books-service';
import { Container, Card, Button } from 'react-bootstrap';

// const getBookById = async (id) => {
//     const response = await axios.get(`https://openlibrary.org/works/${id}.json`);
//     return {
//         id: response.data.key,
//         title: response.data.title,
//         description: response.data.description ? response.data.description.value: 'No description available.',
//         covers: response.data.covers,
//         authors: response.data.authors
//     };
// };

function BookDetail() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

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

    if (loading) return <div>Loading...</div>;
    if (!book) return <div>Book not found</div>;

    return (
        <>
            <Container className="my-4">
                <Card>
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Author: {book.author}</Card.Subtitle>
                        <Card.Text>Description: {book.description}</Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Container>
        
        </>
        // <div className="book-detail">
        //     <h2>{book.title}</h2>
        //     <p>Author: {book.author}</p>
        //     <p>Price: ${book.price}</p>
        //     <p>Genre {book.genre.join(', ')}</p>
        //     <p>Description: {book.descriptoin}</p>
        //     <button>Add to Cart</button>
        // </div>
    );
}

export default BookDetail;