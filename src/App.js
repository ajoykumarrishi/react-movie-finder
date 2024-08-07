import React, { useState } from 'react';
import SearchInputComponent from './components/search-input.component';
import MovieContainerComponent from './components/movie-container.component';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="movie-finder-bg">
      <div className="container py-5">
        <header className="text-center mb-5">
          <a href="/" className="movie-title text-decoration-none">
            <h1 className="display-4">🎬 CineMagic Explorer 🍿</h1>
          </a>
          <p className="lead">Discover your next favorite movie adventure!</p>
        </header>

        <section className="search-section mb-5">
          <SearchInputComponent setMovies={setMovies} />
        </section>

        <main className="movie-results">
          <MovieContainerComponent movies={movies} />
        </main>

        <footer className="footer mt-5 text-center text-light">
          <p>&copy; {new Date().getFullYear()} CineMagic Explorer. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;