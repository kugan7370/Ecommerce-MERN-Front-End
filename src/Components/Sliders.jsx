import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import Categories from './Categories'

function Sliders({ datas }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Container>
      <Slider {...settings}>
        {datas.map((banner) => (
          <ImageContainer key={banner.id}>
            <img src={banner.image} alt="" />
          </ImageContainer>
        ))}
      </Slider>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 500px;
`

const ImageContainer = styled.div`
  height: 400px;
  width: 100%;
  object-fit: cover;
  img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 767px) {
    height: 200px;
    object-fit: contain;
  }
`

export default Sliders
