import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MovieDisplay from './components/MovieDisplay';
import SearchDisplay from './components/SearchDisplay'; // Import SearchDisplay
import MyList from './components/MyList'; // Import MyList to show added movies
import { fetchMovies } from './utils/fetchMovies'; // Import fetchMovies

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [myMovies, setMyMovies] = useState([]); // State for storing movies in "My List"

  // Handle search
  const handleSearch = async (query) => {
    setSearchQuery(query); // Update search query
    if (query.trim()) {
      // Fetch search results when query is not empty
      const results = await fetchMovies('search', query);
      setSearchResults(results);
    } else {
      setSearchResults([]); // Clear results if the search query is empty
    }
  };

  // Add a movie to My List
  const addToMyList = (movie) => {
    setMyMovies((prevMovies) => {
      // Prevent duplicates by checking if the movie already exists in the list
      if (prevMovies.some((m) => m.id === movie.id)) return prevMovies;
      return [...prevMovies, movie];
    });
  };

  // Remove a movie from My List
  const removeFromMyList = (movieId) => {
    setMyMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <MyList myMovies={myMovies} removeFromMyList={removeFromMyList} />

      {searchQuery ? (
        // Display SearchResults if there's a query
        <SearchDisplay query={searchQuery} results={searchResults} addToMyList={addToMyList} />
      ) : (
        
        // Display MovieDisplay when there's no search query
        <MovieDisplay addToMyList={addToMyList} />
      )}
    </div>
  );
};

export default App;
