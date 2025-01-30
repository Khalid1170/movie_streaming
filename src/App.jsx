import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDisplay from './components/MovieDisplay';
import MovieDetails from './components/MovieDetails';
import './index.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies();
      setMovies(movies);
    };

    getMovies();
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Popular Movies</h1>
        <Routes>
          <Route path="/" element={<MovieDisplay movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;