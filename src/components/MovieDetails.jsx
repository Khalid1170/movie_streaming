import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/MovieDetails.css';
import { fetchMovieDetails } from './MovieComponent';

const MovieDetails = ({ addToMyList }) => {  // Accept addToMyList as a prop
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieData = await fetchMovieDetails(id);
        setMovie(movieData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [id]);

  const handleAddToMyList = () => {
    if (movie) {
      addToMyList(movie);  // Call the addToMyList function passed from the parent component
    }
  };

  if (loading) return <p>Loading movie details...</p>;
  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <div className="image">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title} 
        />
      </div>
      <p>{movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average} / 10</p>

      {/* Add to My List Button */}
      <button onClick={handleAddToMyList}>Add to My List</button>
    </div>
  );
};

export default MovieDetails;
