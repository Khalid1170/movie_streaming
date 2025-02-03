import React from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {//function to handle adding the movie to the watch list
  const handleWatchList = () => {
    console.log(`"${movie.title}" added to watch list`);
//log the movie title to the console
  };

  return (
    <div className='movie-card'>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}//movie poster path from the api
        alt={movie.title}/>
        <h4>{movie.title}</h4>
        
        <button onClick={handleWatchList}//triger handleWatchlist when clicked
        className='function-button watchList'>
          Add to watch list
        </button>
    </div>
  );

};

export default MovieCard;