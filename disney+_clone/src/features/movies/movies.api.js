const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/movie/popular';

export async function fetchMoviesAPI() {
    try {
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&page=1`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching movies: ", error);
        return [];
    }
}