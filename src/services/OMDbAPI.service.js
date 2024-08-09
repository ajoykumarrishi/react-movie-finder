const API_KEY = 'b7da8d63';

export async function searchMovies(query) {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // Ensure we only return movies, just in case the API returns mixed results
    if (data.Search) {
      data.Search = data.Search.filter(item => item.Type === 'movie');
    }
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}