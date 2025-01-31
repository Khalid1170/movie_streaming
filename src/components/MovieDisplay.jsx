import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { fetchMovies, fetchTrendingMovies, fetchFreeMovies } from './MovieComponent';
import Navbar from './Navbar'; // Import Navbar component
import '../styles/MovieDisplay.css';

const MovieDisplay = ({ addToMyList }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [freeMovies, setFreeMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]); // New state for search results
  const [isSearching, setIsSearching] = useState(false); // To track if it's a search query

  // Fetch movies on initial load
  useEffect(() => {
    const getMovies = async () => {
      const popular = await fetchMovies('popular');
      const trending = await fetchTrendingMovies();
      const free = await fetchFreeMovies();

      setPopularMovies(popular);
      setTrendingMovies(trending);
      setFreeMovies(free);
    };

    if (!isSearching) {
      getMovies();
    }
  }, [isSearching]); // Re-run fetching if search state changes

  // Handle search input and update search results
  const handleSearch = async (query) => {
    setIsSearching(true); // Set searching state to true
    const results = await fetchMovies('search', query); // Fetch search results
    setSearchResults(results); // Update search results
  };

  return (
    <div className="movie-display">
      {/* Display the movie categories */}
      <h2>Trending Movies</h2>
      <div className="movie-category">
        <div className="trending">
          {isSearching ? (
            searchResults.map((movie) => (
              <MovieCard key={movie.id} movie={movie} addToMyList={addToMyList} />
            ))
          ) : (
            trendingMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} addToMyList={addToMyList} />
            ))
          )}
        </div>
      </div>

      <h2>Popular Movies</h2>
      <div className="movie-category">
        <div className="popular">
          {isSearching ? (
            searchResults.map((movie) => (
              <MovieCard key={movie.id} movie={movie} addToMyList={addToMyList} />
            ))
          ) : (
            popularMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} addToMyList={addToMyList} />
            ))
          )}
        </div>
      </div>

      <h2>Free Movies</h2>
      <div className="movie-category">
        <div className="free">
          {isSearching ? (
            searchResults.map((movie) => (
              <MovieCard key={movie.id} movie={movie} addToMyList={addToMyList} />
            ))
          ) : (
            freeMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} addToMyList={addToMyList} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDisplay;
