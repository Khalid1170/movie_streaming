// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../styles/NavFoot.css';

function Navbar({ onSearch }) {
  const [query, setQuery] = useState(''); // Track search input

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
  

  return (
    <div className="Navbar">
     
      <h1>Movie Buzz</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder=""
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
