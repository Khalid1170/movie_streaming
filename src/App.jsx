import React, { useState, useEffect } from 'react';
import MovieDisplay from './components/MovieDisplay';
import { fetchMovies } from './components/MovieComponent';
import './index.css';


function App () {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies();
      setMovies(movies);
    };

    getMovies();
  }, []);

  return (
    <div className="App">
      <h1>Popular Movies</h1>
      <MovieDisplay movies={movies} />
    </div>
  );
};

export default App;