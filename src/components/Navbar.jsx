import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import '../styles/NavFoot.css';
import '../styles/MovieCard.css';


function Navbar({ onSearch }) {
  const [query, setQuery] = useState(''); // Track search input
  const navigate = useNavigate();  // Initialize navigate

  const handleInputChange = (event) => {
    setQuery(event.target.value); // Update query state
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query); // Trigger the search function passed from the parent
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // Function to handle Home button click
  const handleHomeClick = () => {
    setQuery('');  // Clear search query
    onSearch('');  // Reset search results (you might want to modify onSearch)
    navigate('/');  // Navigate to the home page
  };

  return (
    <div className="Navbar">
      <div className="Home">
        <button onClick={handleHomeClick}> Home </button> {/* Attach handleHomeClick */}
      </div>

      <h1>Movie Buzz</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
