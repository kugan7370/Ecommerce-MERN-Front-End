import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { CategoriesData } from '../data/Categories'

function Categories() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <Container>
      <ItemContainer>
        {CategoriesData.map((cat) => (
          <InnerContainer key={cat.id}>
            <Title>
              <h2>{cat.category}</h2>
            </Title>
            <ImageContainer>
              <img src={cat.image} alt="" />
            </ImageContainer>
          </InnerContainer>
        ))}
      </ItemContainer>
    </Container>
  )
}

const Container = styled.div`
  height: 500px;
  margin-top: 50px;
`
const InnerContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`
const ImageContainer = styled.div`
  overflow: hidden;
  object-fit: contain;
  height: 250px;
  padding: 50px;

  background-color: #f0eded;
  img {
    height: 100%;
    width: 100%;
    transition: all 250ms;
    &:hover {
      transform: scale(120%);
    }
  }
`
const ItemContainer = styled.div`
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  /* box-shadow: 200px 150px 100px white; */

  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
    padding: 0;
  }
`
const Title = styled.div`
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  background-color: #dfe2e6;
`

export default Categories
