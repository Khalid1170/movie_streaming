import React, { useState, useEffect } from 'react';
import MovieDisplay from './components/MovieDisplay';
import { fetchMovies } from './components/MovieComponent';
import './index.css';
import "./App.css"


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

    <div className='top-image'>
        <img className="special-image" src="./public/movieposters.png"/>

  <div className='overlaytext'>
    <h1>Your Movie Collection</h1>
    <p>Explore the best movies available</p>
    <button>Check it out</button>
  </div>
      

      <MovieDisplay movies={movies} />
      </div>
      </div>
  );
};

export default App;