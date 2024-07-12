import express from 'express';

const app = express();
const PORT = 3000;

console.log('Starting server....');

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