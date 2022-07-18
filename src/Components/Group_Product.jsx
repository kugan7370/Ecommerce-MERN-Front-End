import { Rating } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

function Group_Product({ datas }) {
  return (
    <Container>
      <InnerGrid>
        {datas.map((cat, i) => (
          <InnerContainer key={cat.id}>
            <ImageContainer>
              <img src={cat.image} alt="" />
            </ImageContainer>
            <TextContainer>
              <h4>{cat.name}</h4>
              <h5>{cat.price}</h5>
              <Rating name="read-only" value={cat.rating} readOnly />
            </TextContainer>
            <AddCardButton>
              <h4>Add card</h4>
            </AddCardButton>
          </InnerContainer>
        ))}
      </InnerGrid>
    </Container>
  )
}

const Container = styled.div`
  width: 95%;
  margin: auto;
  height: auto;
  margin-top: 50px;
`

const InnerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 50px;
`
const InnerContainer = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  background-color: #fcf7f7;
`
const ImageContainer = styled.div`
  object-fit: contain;
  height: 250px;
  padding: 40px;
  img {
    height: 100%;
    width: 100%;
    transition: all 250ms;
    &:hover {
      transform: scale(120%);
    }
  }
`

const Title = styled.div`
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  background-color: #dfe2e6;
  padding: 0 10px;
`

const TextContainer = styled.div`
  text-align: center;
  margin-bottom: 10px;
`
const AddCardButton = styled.div`
  background-color: #ffd814;
  text-align: center;

  &:hover {
    background-color: #ffa41c;
  }
`
export default Group_Product
