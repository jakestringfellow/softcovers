import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getBooks = async () => {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
};

export const getBookById = async (id) => {
    const response = await axios.get(`${API_URL}/books/${id}`);
    return response.data;
}


// const OPEN_LIBRARY_API_URL = 'https://openlibrary.org/search.json';

// export const searchBooks = async (query) => {
//     const response = await axios.get(OPEN_LIBRARY_API_URL, {
//         params: {
//             q: query,
//             limit: 20
//         }
//     });
//     return response.data.docs.map(item => ({
//         id: item.key,
//         title: item.title,
//         author: item.author_name ? item.author_name.join(',') : 'Unknown Author',
//         isbn: item.isbn ? item.isbn[0] : 'N/A',
//         publisher: item.publisher ? item.publisher[0] : 'Unknown Publisher',
//         publicationDate: item.first_publish_year || 'N/A',
//         pages: item.number_of_pages_median || 'N/A',
//         language: item.language ? item.language[0] : 'N/A',
//         genre: item.subject ? item.subject : ['N/A'],
//         description: item.first_sentence ? item.first_sentence[0] : 'No description available',
//         coverImageUrl: item.cover_i ? `http://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg` : 'http:example.com/default_cover.jpg',
//         price: 'N/A',
//         rating: 'N/A',
//         format: 'N/A',
//         availability: 'N/A'
//     }));
// };
