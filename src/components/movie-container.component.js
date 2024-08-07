import React from 'react';

function MovieContainerComponent({ movies }) {
  if (movies.length === 0) {
    return <div className="text-center mt-5">Search for movies to start your cinematic journey!</div>;
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="col">
          <div className="card h-100 movie-card">
            <img 
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster"} 
              className="card-img-top" 
              alt={movie.Title} 
            />
            <div className="card-body">
              <h5 className="card-title">{movie.Title}</h5>
              <p className="card-text">Year: {movie.Year}</p>
              <p className="card-text">Type: {movie.Type}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieContainerComponent;