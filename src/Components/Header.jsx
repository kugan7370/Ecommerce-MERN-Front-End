import React from 'react'
import styled from 'styled-components'
import { BsSearch, BsCartPlusFill } from 'react-icons/bs'
const logoImg = 'https://pngimg.com/uploads/amazon/amazon_PNG11.png'

function Header() {
  return (
    <Container>
      <InnerContainer>
        <Logo>
          <img src={logoImg} alt="logo" />
        </Logo>
        <Search>
          <input type="text" placeholder="Search" />
          <IconContainer>
            <BsSearch className="search-icon" />
          </IconContainer>
        </Search>
        <Auth>
          <h3>Hello, Guest</h3>
          <h3>Sign in</h3>

          <Cart>
            <BsCartPlusFill className="card-icon" />
          </Cart>
        </Auth>
      </InnerContainer>
      <MobileSearch>
        <input type="text" placeholder="Search" />
        <IconContainer>
          <BsSearch className="search-icon" />
        </IconContainer>
      </MobileSearch>
    </Container>
  )
}

const Container = styled.div`
  height: 60px;
  background-color: #131921;
  color: white;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: space-around;
    height: 150px;
    padding: 10px 0px;
  }
`
const Logo = styled.div`
  width: 100px;
  height: 50px;
  object-fit: cover;
  margin-top: 20px;
  padding: 10px;
  cursor: pointer;
  margin-left: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`
const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 767px) {
    justify-content: space-between;
  }
`

const Search = styled.div`
  overflow: hidden;
  border-radius: 5px;
  width: 60%;
  margin: auto;
  background-color: white;
  display: flex;
  align-items: center;

  input {
    outline: none;
    width: 100%;
    padding: 10px;
    flex: 1;
    border: none;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`

const IconContainer = styled.div`
  background-color: #febd69;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  .search-icon {
    width: 25px;
    height: 25px;
    color: black;
  }
`
const Auth = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: center;
  h3 {
    color: white;
    font-weight: bold;
    padding: 10px;
  }
  &:nth-child(1) {
    margin-right: 10px;
  }
`
const Cart = styled.div`
  margin-right: 20px;
  padding: 10px;

  .card-icon {
    width: 50px;
    height: 50px;
  }
`
const MobileSearch = styled.div`
  overflow: hidden;
  border-radius: 5px;
  width: 80%;
  margin: auto;
  background-color: white;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input {
    outline: none;
    width: 100%;
    padding: 10px;
    flex: 1;
    border: none;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

export default Header
