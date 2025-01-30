import React from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({ movie, addToMyList }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h4>{movie.title}</h4>
      <button onClick={() => addToMyList(movie)}>Add to My List</button>
    </div>
  );
};

export default MovieCard;
