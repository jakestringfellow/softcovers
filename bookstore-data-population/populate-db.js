console.log('Starting script...');
const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const Book = require('./models/Book'); // Import your Book model

console.log('Connecting to MongoDB...');
mongoose.connect('mongodb://localhost/online-store');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB');

    try {
        // Clear existing data
        await Book.deleteMany({});
        console.log('Cleared existing data from books collection');

        // Generate and insert dummy data
        const books = [];
        const categories = ['Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy', 'Thriller', 'Romance', 'Mystery', 'History', 'Biography'];

        for (let i = 0; i < 1000; i++) {
            const book = new Book({
                title: faker.lorem.words(),
                author: faker.person.fullName(),
                category: faker.helpers.arrayElement(categories),
                price: faker.number.int({ min: 5, max: 50 }),
                description: faker.lorem.paragraph(),
                imageUrl: faker.image.url()
            });
            books.push(book);
        }

        await Book.insertMany(books);
        console.log('Inserted dummy data into books collection');
        db.close();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Error populating database:', error);
    } finally {
        console.log('Script execution completed.');
    }
});
