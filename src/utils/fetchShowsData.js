export async function fetchShowsData(query) {
  try {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;
    const response = await fetch(url);
    const shows = await response.json();
    return { shows };
  } catch (error) {
    return { error: error.message || 'An unexpected error occurred' };
  }
}
