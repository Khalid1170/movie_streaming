import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { fetchMovies, fetchTrendingMovies, fetchFreeMovies } from './MovieComponent';
import '../styles/MovieDisplay.css';

const MovieDisplay = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [freeMovies, setFreeMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const popular = await fetchMovies('popular');
      const trending = await fetchTrendingMovies();
      const free = await fetchFreeMovies();

      setPopularMovies(popular);
      setTrendingMovies(trending);
      setFreeMovies(free);
    };

    getMovies();
  }, []);

  return (
  
    <div className="movie-display">
      <h2>Trending Movies</h2>
      <div className="movie-category">
      <div className='trending'>
        {trendingMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      </div>


      <h2>Popular Movies</h2>
      <div className="movie-category">
        <div className='popular'>
        {popularMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      </div>

      <h2>Free Movies</h2>
      <div className="movie-category">
        <div className='free'>
        {freeMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default MovieDisplay;
