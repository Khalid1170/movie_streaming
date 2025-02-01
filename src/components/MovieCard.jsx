import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/MovieCard.css';

const MovieCard = ({ movie, addToMyList, isInMyList }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);  // Navigate to the MovieDetails page
  };

  const handleWatchList = (e) => {
    e.stopPropagation(); // Prevent navigating when clicking the "Add to My List" button
    addToMyList(movie);
    console.log(`"${movie.title}" added to watch list`); // Log movie title
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h4>{movie.title}</h4>
      
      {/* Show Add to My List button only if the movie is not already in the list */}
      {!isInMyList && (
        <button onClick={handleWatchList} className="function-button watchList">
          Add to watch list
        </button>
      )}
    </div>
  );
};

export default MovieCard;
