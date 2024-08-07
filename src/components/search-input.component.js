import React, { useState } from 'react';
import { searchMovies } from '../services/OMDbAPI.service';

function SearchInputComponent({ setMovies }) {
  const [input, setInput] = useState('');

  const handleUserSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await searchMovies(input);
      setMovies(data.Search || []);
    } catch (error) {
      console.error('Error fetching movie data:', error);
      setMovies([]);
    }
  };

  return (
    <form onSubmit={handleUserSearchSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Discover your next favorite movie..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn search-button" type="submit">
          Explore
        </button>
      </div>
    </form>
  );
}

export default SearchInputComponent;