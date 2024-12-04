// store.js
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../features/movies/movies.reducer';

const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
});

export default store;
