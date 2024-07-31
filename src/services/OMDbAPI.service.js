const API_KEY = 'b7da8d63';

export function fetchMovies (e, input = 'frozen') {
  e.preventDefault();
  const url = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${input}`
  fetch(url).then((response) => response.json()).then(data => console.log(data));
}