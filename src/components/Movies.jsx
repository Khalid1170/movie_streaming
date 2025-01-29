import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { fetchMovies } from './MovieComponent';
import '../styles/MovieDisplay.css';

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const movies = await fetchMovies('popular');
        setPopularMovies(movies);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
        setLoading(false);
      }
    };

    getPopularMovies();
  }, []);

  if (loading) return <p>Loading popular movies...</p>;

  return (
    <div className="movie-category">
      <h2>Popular Movies</h2>
      <div className="movie-list">
        {popularMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
