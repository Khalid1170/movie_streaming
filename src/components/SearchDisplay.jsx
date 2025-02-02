// In SearchDisplay.js
import React from 'react';
import MovieCard from './MovieCard';
import '../styles/SearchDisplay.css';


const SearchDisplay = ({ query, results, addToMyList }) => {
  return (
    <div className="movie-category">
      <h2>Search Results for "{query}"</h2>
      <div className="movie-list">
        {results.map((movie) => (
          <div key={movie.id} className="movie-card">
            <MovieCard movie={movie} addToMyList={addToMyList} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchDisplay;
