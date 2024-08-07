import React, { useState } from 'react';
import SearchInputComponent from './components/search-input.component';
import MovieContainerComponent from './components/movie-container.component';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="container-fluid movie-finder-bg py-5">
      <div className="container">
        <h1 className="text-center mb-4 movie-title">🎬 CineMagic Explorer 🍿</h1>
        <SearchInputComponent setMovies={setMovies} />
        <MovieContainerComponent movies={movies} />
      </div>
    </div>
  );
}

export default App;