import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../features/movies/movies.actions';
import { selectMovies, selectMoviesLoading, selectMoviesError } from '../features/movies/movies.selector';


function Movies() {

    const imageBaseURL = "https://image.tmdb.org/t/p/w500/";
    const dispatch = useDispatch();
    const movies = useSelector(selectMovies);
    console.log(movies)

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);
    return (
        <Container>
            <h4>Recommended For You</h4>
            <Content>
                {movies.length === 0 ? (
                    <p>Loading movies...</p>
                ) : (
                    movies.map((movie) => (
                        <Wrap key={movie.id}>
                            <Link to={`/details/${movie.id}`} state={{ movie }}>
                                {movie.poster_path ? (
                                    <img
                                        src={`${imageBaseURL}${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                ) : (
                                    <p>No poster available</p>
                                )}
                            </Link>
                        </Wrap>
                    ))
                )}
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
`

const Content = styled.div`
display:grid;
grid-gap:25px;
grid-template-columns:  repeat(4, minmax(0,1fr)); 
`
const Wrap = styled.div`
cursor:pointer;
border-radius:10px;
overflow:hidden;
border: 3px solid rgba(249,249,249,0.1);
box-shadow: rgba(0 0 0 / 69%) 0 26px 30px -10px, rgba(0 0 0 / 73%) 0 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

img{
    width:100%;
    height:100%;
    object-fit:cover;
}
&:hover{
    box-shadow: rgba(0 0 0 / 80%) 0 40px 58px -16px, rgba(0 0 0 / 72%) 0 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249,249,249, 0.8);
}

`