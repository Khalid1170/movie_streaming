import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MyList.css';

const MyList = ({ myMovies, removeFromMyList }) => {
  return (
    <div className="movie-category">
      <h2>My List</h2>
      {myMovies.length === 0 ? (
        <p>No movies added to My List yet.</p>
      ) : (
        <div className="movie-list">
          {myMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <MovieCard movie={movie} addToMyList={() => {}} isInMyList={true} /> {/* isInMyList passed as true */}
              <button onClick={() => removeFromMyList(movie.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyList;
