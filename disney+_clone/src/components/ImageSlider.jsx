import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components'

function ImageSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (

        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badag.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badging.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scale.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scales.jpg" />
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider

const Carousel = styled(Slider)`
margin-top:20px;

.slick-list{
    overflow:visible;
}
button {
   z-index:1; 
}
.slick-dots li button:before {
    font-size:10px;
    color: rgba(150,158,171)
}
li.slick-active button::before{
    color:white;
    font-size:10px;
}

`
const Wrap = styled.div`
cursor:pointer;
img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 4px solid transparent;
    box-shadow: rgba(0 0 0 / 69%) 0 26px 20px -10px, rgba(0 0 0 / 73%) 0 16px 5px -10px;
    transition: all 0.3s ease;
  }

  img:hover {
    border: 4px solid rgba(249, 249, 249, 0.8);
  
  }

`