export async function fetchShowData(id, deep = false) {
  try {
    if (isNaN(Number(id))) {
      throw new Error('The provided ID must be a valid number');
    }

    let url = `https://api.tvmaze.com/shows/${id}?embed[]=images`;
    if (deep) {
      url += `&embed[]=cast&embed[]=seasons&embed[]=episodes`;
    }

    const res = await fetch(url);
    const show = await res.json();
    return { show };
  } catch (error) {
    return { error: error.message || 'An unexpected error occurred' };
  }
}
