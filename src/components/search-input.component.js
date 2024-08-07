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
    <form onSubmit={handleUserSearchSubmit} className="mb-4 d-flex">
      <input
        type="text"
        className="search-input flex-grow-1"
        placeholder="Discover your next favorite movie..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="search-button" type="submit">
        Explore
      </button>
    </form>
  );
}

export default SearchInputComponent;