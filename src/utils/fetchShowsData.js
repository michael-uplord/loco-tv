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

export async function fetchRandomShowsData() {
  try {
    const today = new Date().toISOString().split('T')[0];

    const url = `https://api.tvmaze.com/schedule/web?date=${today}`;
    const response = await fetch(url);
    const shows = await response.json();

    const showList = Array.isArray(shows) ? shows : Object.values(shows);

    const uniqueShows = [];
    const seenNames = new Set();

    for (const show of showList) {
      const showName = show._embedded?.show?.name || show.name;
      if (showName && !seenNames.has(showName)) {
        seenNames.add(showName);
        uniqueShows.push(show);
      }
    }

    const randomShows = uniqueShows
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);

    return { shows: randomShows };
  } catch (error) {
    return { error: error.message || 'An unexpected error occurred' };
  }
}
