import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
        <Nav>
            <Logo src='/images/logo.svg' />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
            </NavMenu >
            <UserImage src='https://avatar.iran.liara.run/public' />
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
height: 70px;
background-color: #090b13;
display:flex;
align-items:center;
padding: 0 36px;
`
const Logo = styled.img`
width:80px;
`
const NavMenu = styled.div`
display: flex;
flex:1;
margin-left:25px;
align-items:center;
a{
    display:flex;
    align-items:center;
    padding: 0 12px;
    cursor: pointer;
    margin-left:4px;

    img{
        height:20px;
    }
    span{
        margin-left:4px;
        font-size:13px;
        letter-spacing: 1.42px;
        position:relative;

        &:after {
           content: "";
           height:2px;
           background:white;
           position:absolute;
           left:0;
           right:0;
           bottom:-6px;
           opacity: 0;
           transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
           transform: scaleX(0);
           transform-origin:left center;
        }
    }
    &:hover {
        span:after{
            transform: scaleX(1);
            opacity:1;
        }
    }
}

`
const UserImage = styled.img`
width:48px;
height:48px;
cursor: pointer;
`