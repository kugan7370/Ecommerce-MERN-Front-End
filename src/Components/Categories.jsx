import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'

import { CategoriesData } from '../data/Categories'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

function Categories({ datas }) {
  return (
    <Container>
      <Carousel responsive={responsive}>
        {datas.map((cat, i) => (
          <InnerContainer key={cat.id}>
            <Title>
              <h2>{cat.category}</h2>
            </Title>
            <ImageContainer>
              <img src={cat.image} alt="" />
            </ImageContainer>
            <Link className="show_more" to={'/category/:id'}>
              <p>{i % 2 == 0 ? 'See more' : 'Show more'}</p>
            </Link>
          </InnerContainer>
        ))}
      </Carousel>
    </Container>
  )
}

const Container = styled.div`
  width: 95%;
  margin: auto;
  height: 500px;
  margin-top: 50px;
`
const InnerContainer = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  background-color: #f0eded;
  .show_more {
    text-decoration: none;
  }
  p {
    margin-left: 20px;
    color: #8ca5b4;

    &:hover {
      text-decoration: underline;
      text-decoration-color: red;
      color: red;
    }
  }
`
const ImageContainer = styled.div`
  object-fit: contain;
  height: 250px;
  padding: 40px;

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
`
const Title = styled.div`
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  background-color: #dfe2e6;
  padding: 0 10px;
  h2 {
    font-size: 1.5rem;
  }
`

export default Categories
