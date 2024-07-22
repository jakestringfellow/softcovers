import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Book from './books/book.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb+srv://temp-user:scarab@cluster0.czlhhst.mongodb.net/softcovers'


// let books = [
//     { id: 1, title: 'A Game of Thrones', author: 'George R. R. Martin', price: 30.00, genre: ['Fiction', 'Fantasy'] },
//     { id: 2, title: 'A Storm of Swords', author: 'George R. R. Martin', price: 32.00, genre: ['Fiction', 'Fantasy']},
//     { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 33.00, genre: ['Fiction', 'Fantasy']}
// ]

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas Data Federation');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
})

app.get('/api/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({message: error.messsage});
    }

});

app.get('/api/books/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) throw new Error('Book not found');
        res.json(book);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});



app.get('/', (req, res) => {
    res.send('Softcovers server');
});

app.get('/api/featured-books', async (req, res) => {
    try {
        const featuredBooks = await Book.find().limit(6);
        res.json(featuredBooks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
        return;
    }
    console.log(`Server is running on http://localhost:${PORT}`);
});