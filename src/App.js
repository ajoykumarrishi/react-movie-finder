import SearchInputComponent from "./components/search-input.component";
import MovieContainerComponent from "./components/movie-container.component"

function App() {
  return (
    <div className="App">
      <h1>Movie Finder!</h1>
      <SearchInputComponent></SearchInputComponent>
      <MovieContainerComponent></MovieContainerComponent>
    </div>
  );
}

export default App;
