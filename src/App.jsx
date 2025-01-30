import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDisplay from './components/MovieDisplay';
import MovieDetails from './components/MovieDetails';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Movie App</h1>
        <Routes>
          <Route path="/" element={<MovieDisplay />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;