// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../styles/NavFoot.css';

function Navbar({ onSearch }) {
  const [query, setQuery] = useState(''); // Track search input

  const handleInputChange = (event) => {
    setQuery(event.target.value); // Update query state
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query); // Trigger the search in App component
    }
  };

  return (
    <div className="Navbar">
      <div className="Navbar-links">
        <a href="/">My List</a>
      </div>
      <h1>Movie Buzz</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Find your Movie"
          value={query}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

const API_KEY = 'dd97f5e4bd55182756b434db76a0f6e4';
const BASE_URL = 'https://api.themoviedb.org/3';

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
  // Example URL for free-to-watch movies (adjust according to the API you're using)
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

// src/utils/fetchMovies.js
const API_KEY = 'your-api-key-here';  // Replace with your actual API key
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (category = 'popular', query = '') => {
  try {
    let url = '';
    
    if (category === 'search' && query) {
      // Construct search URL with query parameter if we're searching
      url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
    } else {
      // Otherwise, use the normal category (popular, trending, etc.)
      url = `${BASE_URL}/movie/${category}?api_key=${API_KEY}`;
    }
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return data.results || [];  // Return empty array if there are no results
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];  // Return empty array if there's an error
  }
};

import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { fetchMovies, fetchTrendingMovies, fetchFreeMovies } from './MovieComponent';
import '../styles/MovieDisplay.css';

const MovieDisplay = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [freeMovies, setFreeMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const popular = await fetchMovies('popular');
      const trending = await fetchTrendingMovies();
      const free = await fetchFreeMovies();

      setPopularMovies(popular);
      setTrendingMovies(trending);
      setFreeMovies(free);
    };

    getMovies();
  }, []);

  return (
    <div className="movie-display">
      <h2>Trending Movies</h2>
      <div className="movie-category">
      <div className='trending'>
        {trendingMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      </div>


      <h2>Popular Movies</h2>
      <div className="movie-category">
        <div className='popular'>
        {popularMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      </div>

      <h2>Free Movies</h2>
      <div className="movie-category">
        <div className='free'>
        {freeMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default MovieDisplay;


import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { fetchTrendingMovies } from './MovieComponent';
import '../styles/MovieDisplay.css';

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
        setLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  if (loading) return <p>Loading trending movies...</p>;

  return (
    <div className="movie-category">
      <h2>Trending Movies</h2>
      <div className="movie-list">
        {trendingMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;


