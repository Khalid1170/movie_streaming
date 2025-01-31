const API_KEY = 'dd97f5e4bd55182756b434db76a0f6e4';
const BASE_URL = 'https://api.themoviedb.org/3';

// Generic fetch function to handle different movie categories
export const fetchMovies = async (category = 'popular', query = '') => {
  try {
    let url = '';
    if (category === 'search' && query) {
      // If category is 'search', construct the URL for searching
      url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
    } else {
      // Otherwise, use the category (popular, trending, etc.)
      url = `${BASE_URL}/movie/${category}?api_key=${API_KEY}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    return data.results || []; // Return results or an empty array if no results
  } catch (error) {
    console.error('Error fetching movies:', error);
    return []; // Return empty array if there's an error
  }
};
