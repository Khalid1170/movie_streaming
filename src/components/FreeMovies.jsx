import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { fetchFreeMovies } from './MovieComponent';
import '../styles/MovieDisplay.css';

const FreeMovies = () => {
  const [freeMovies, setFreeMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFreeMovies = async () => {
      try {
        const movies = await fetchFreeMovies();
        setFreeMovies(movies);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching free movies:', error);
        setLoading(false);
      }
    };

    getFreeMovies();
  }, []);

  if (loading) return <p>Loading free movies...</p>;

  return (
    <div className="movie-category">
      <h2>Free Movies</h2>
      <div className="movie-list">
        {freeMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FreeMovies;
