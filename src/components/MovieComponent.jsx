// MovieComponent.js
const API_KEY = 'dd97f5e4bd55182756b434db76a0f6e4';
const BASE_URL = 'https://api.themoviedb.org/3';

// Function to fetch movie details by ID
export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};

// Generic fetch function to handle different movie categories
export const fetchMovies = async (category = 'popular') => {
  const response = await fetch(`${BASE_URL}/movie/${category}?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

// Function for trending movies
export const fetchTrendingMovies = async () => {
  const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

// Function for free-to-watch movies (you can adjust based on the service you're using)
export const fetchFreeMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};
