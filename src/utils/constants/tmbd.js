export const tmdb_movie_api = "https://api.themoviedb.org/3/movie/now_playing?page=1"

export const movie_options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
    }
  };

export const tmdb_image_api = "https://image.tmdb.org/t/p/w500/"
  