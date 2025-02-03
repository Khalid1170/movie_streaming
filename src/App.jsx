import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieDisplay from './components/MovieDisplay';
import SearchDisplay from './components/SearchDisplay';
import MyList from './components/MyList';
import MovieDetails from './components/MovieDetails';
import { fetchMovies } from './utils/fetchMovies';
import MoviePoster from './components/MoviePoster';
import Footer from './components/Footer';


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [myMovies, setMyMovies] = useState([]);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = await fetchMovies('search', query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const addToMyList = (movie) => {
    setMyMovies((prevMovies) => {
      if (prevMovies.some((m) => m.id === movie.id)) return prevMovies;
      return [...prevMovies, movie];  // Add movie if not already in the list
    });
  };

  const removeFromMyList = (movieId) => {
    setMyMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));  // Remove movie by id
  };

  return (
    <Router>
      <div>
        <Navbar onSearch={handleSearch} />
        <MoviePoster />

        <MyList myMovies={myMovies} removeFromMyList={removeFromMyList} />  {/* Display My List */}
        

        <Routes>
          <Route 
            path="/" 
            element={searchQuery ? 
              <SearchDisplay query={searchQuery} results={searchResults} addToMyList={addToMyList} /> :
              <MovieDisplay addToMyList={addToMyList} />} 
          />
          
          {/* Route to MovieDetails, capturing the movie id from the URL */}
          <Route 
            path="/movie/:id" 
            element={<MovieDetails addToMyList={addToMyList} />} 
          />
        </Routes>
      </div>
  
    </Router>
  );
};

export default App;
