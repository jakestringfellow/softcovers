import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getBooks = async () => {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
};
