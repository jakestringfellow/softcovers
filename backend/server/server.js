import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Example book objects to test
let books = [
    { id: 1, title: 'A Game of Thrones', author: 'George R. R. Martin', price: 30.00, genre: ['Fiction', 'Fantasy'] },
    { id: 2, title: 'A Storm of Swords', author: 'George R. R. Martin', price: 32.00, genre: ['Fiction', 'Fantasy']},
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 33.00, genre: ['Fiction', 'Fantasy']}
]

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);
    if (book) {
        res.json(book);
    } else{
        res.status(404).send('Book not found');
    }
});



app.get('/', (req, res) => {
    res.send('Softcovers server');
});

app.listen(PORT, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
        return;
    }
    console.log(`Server is running on http://localhost:${PORT}`);
});