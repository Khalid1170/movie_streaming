import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { fetchMovies, fetchTrendingMovies, fetchFreeMovies } from './MovieComponent';
//import functions to fetch different categories of movies
import '../styles/MovieDisplay.css';

const MovieDisplay = () => { //defines the movie display component
  const [popularMovies, setPopularMovies] = useState([]); //stores popular movies
  const [trendingMovies, setTrendingMovies] = useState([]);//stores trending movies
  const [freeMovies, setFreeMovies] = useState([]);//stores free movies

  //useEffect hook to fetch movies when the component mounts
  useEffect(() => {// Define an async function to fetch movies

    // Fetch different categories of movies using imported functions 
    const getMovies = async () => {
      const popular = await fetchMovies('popular');
      const trending = await fetchTrendingMovies();
      const free = await fetchFreeMovies();

      // Update the state with fetched movie data
      setPopularMovies(popular);
      setTrendingMovies(trending);
      setFreeMovies(free);
    };

    getMovies();// Call the function to fetch movies
  }, []);// Empty dependency array ensures this runs only once when the component mounts

  return ( //render the movie dispaly component
  
    <div className="movie-display">
      <h2>Trending Movies</h2>
      <div className="movie-category">
      <div className='trending'>
        {/* Loop through trendingMovies and render a MovieCard for each */}
        {trendingMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      </div>

      <h2>Popular Movies</h2>
      <div className="movie-category">
        <div className='popular'>
          {/* Loop through popularMovies and render a MovieCard for each */}
        {popularMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      </div>

      <h2>Free Movies</h2>
      <div className="movie-category">
        <div className='free'>
        {/* Loop through freeMovies and render a MovieCard for each */}
        {freeMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      </div>
    </div>

  );
};

export default MovieDisplay;