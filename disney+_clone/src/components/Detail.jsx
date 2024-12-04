import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { selectMovies } from '../features/movies/movies.selector';
import { useParams, useLocation } from 'react-router-dom';
function Detail() {
    const movies = useSelector(selectMovies);
    const location = useLocation();
    const { movie } = location.state;
    const { id } = useParams()
    const imageBaseURL = "https://image.tmdb.org/t/p/w500/";
    return (
        <Container>
            <Background>
                <img
                    src={`${imageBaseURL}${movie.backdrop_path}`}
                    alt={movie.title}
                />
            </Background>
            <ImageTitle>
                {movie.title}
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                {movie.release_date}
            </SubTitle>
            <Description>
                {movie.overview}
            </Description>
        </Container>

    )
}

export default Detail

const Container = styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position:relative;
`
const Background = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:-1;
opacity:0.8;

img{
    width:100%;
    height:100%;
    object-fit:cover;
}
`
const ImageTitle = styled.div`
font-weight:600;
font-size: 60px;
height:12vh;
min-height:100px;
min-width:200px;
margin-top:60px;

img{
    width:100%;
    height:100%;
    object-fit:contain;
   
}

`
const Controls = styled.div`
display:flex;
align-items:center;
`
const PlayButton = styled.button`
border-radius:4px;
font-size:15px;
display:flex;
align-items:center;
height:56px;
background: rgba(249,249,249);
border:none;
padding:0 24px;
margin-right:22px;
letter-spacing:1.8px;
cursor:pointer;

&: hover {
    background: rgba(198,198,198);
}
`
const TrailerButton = styled(PlayButton)`
background: rgba(0,0,0,0.3);
color:rgba(249,249,249);
border: 1px solid rgba(249,249,249);
`
const AddButton = styled.button`
margin-right:16px;
width:44px;
height:44px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
border:2px solid white;
background: rgba(0,0,0,0.6);
cursor:pointer;

span{
    font-size:30px;
    color:white;
}
`
const GroupWatchButton = styled(AddButton)`
background: rgba(0,0,0);
`

const SubTitle = styled.div`
color:rgba(249,249,249);
font-size:15px;
min-height:20px;
margin-top:26px;
font-weight:600;
font-size:20px;
`
const Description = styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
color:rgba(249,249,249);
max-width:700px;
`