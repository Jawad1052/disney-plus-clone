import { FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from './movies.constants';
import { fetchMoviesAPI } from './movies.api';


export const fetchMoviesStart = () => ({
    type: FETCH_MOVIES_START,
});

export const fetchMoviesSuccess = (movies) => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
});

export const fetchMoviesFailure = (error) => ({
    type: FETCH_MOVIES_FAILURE,
    payload: error,
});

export const fetchMovies = () => async (dispatch) => {
    dispatch(fetchMoviesStart());
    try {
        const movies = await fetchMoviesAPI();
        dispatch(fetchMoviesSuccess(movies));
    } catch (error) {
        dispatch(fetchMoviesFailure(error.message));
    }
};
