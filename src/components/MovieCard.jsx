import React, { useState } from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  // Step 1: Define state to track the current function for this specific movie card
  const [currentFunction, setCurrentFunction] = useState('watchList'); // Default to "Watch List"

  // Step 2: Define the three functions
  const handleWatchList = () => {
    console.log(`"${movie.title}" added to Watch List`);
    // Add your logic for Watch List here
  };

  const handleFavourite = () => {
    console.log(`"${movie.title}" added to Favourites`);
    // Add your logic for Favourite here
  };

  const handleAddToList = () => {
    console.log(`"${movie.title}" added to Custom List`);
    // Add your logic for Add to List here
  };

  // Step 3: Create a click handler to cycle through the functions
  const handleClick = () => {
    switch (currentFunction) {
      case 'watchList':
        handleWatchList();
        setCurrentFunction('favourite');
        break;
      case 'addToList':
        handleAddToList();
        setCurrentFunction('watchList'); // Cycle back to the first function
        break;
      default:
        setCurrentFunction('watchList'); // Fallback to default
    }
  };

  // Step 4: Dynamically set the button text based on the current function
  const buttonText = {
    watchList: 'Add to Watch List',
    favourite: 'Add to Favourites',
  };

  return (
    <div className="movie-card">
      {/* Movie Poster */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      {/* Movie Title */}
      <h4>{movie.title}</h4>
      {/* Multi-function Button */}

      <button 
      onClick={handleClick} 
      className={`multi-function-button ${currentFunction}`}>
        {buttonText[currentFunction]}
      </button>
    </div>
  );
};

export default MovieCard;