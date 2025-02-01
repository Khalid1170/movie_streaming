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
