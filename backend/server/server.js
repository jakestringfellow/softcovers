import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Example book objects to test
let books = [
    { id: 1, title: 'A Game of Thrones', author: 'George R. R. Martin' },
    { id: 2, title: 'A Storm of Swords', author: 'George R. R. Martin' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
];

app.get('/api/books', (req, res) => {
    res.json(books);
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