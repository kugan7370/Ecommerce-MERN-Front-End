import React from 'react'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import { CgShoppingCart } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { user_logout } from '../Redux/User/UserSlicer'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
const logoImg = 'https://pngimg.com/uploads/amazon/amazon_PNG11.png'

function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { current_user } = useSelector((state) => state.user)
  const logout = () => {
    dispatch(user_logout())
    navigate('/signin')
  }

  return (
    <Container>
      <InnerContainer>
        <Link to={'/'}>
          <Logo>
            <img src={logoImg} alt="logo" />
          </Logo>
        </Link>
        <Search>
          <input type="text" placeholder="Search" />
          <IconContainer>
            <BsSearch className="search-icon" />
          </IconContainer>
        </Search>
        <Auth>
          <h3>Hello, Guest</h3>
          {current_user ? (
            <h3 onClick={logout}>{current_user.user.username}</h3>
          ) : (
            <h3>Sign In</h3>
          )}

          <Cart>
            <Link to={'/cartItems'}>
              <CgShoppingCart className="card-icon" />
            </Link>
            {current_user && (
              <CartCount_Container>
                <CartCount>{current_user.user.product_id.length}</CartCount>
              </CartCount_Container>
            )}
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
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 10px 0px;
  z-index: 999;

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
    cursor: pointer;
  }
  &:nth-child(1) {
    margin-right: 10px;
  }
`
const Cart = styled.div`
  margin-right: 20px;
  padding: 10px;
  margin-top: 10px;

  .card-icon {
    width: 40px;
    height: 40px;
    position: relative;
    color: white;
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
const CartCount_Container = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffa41c;
  top: 10px;
  right: 30px;
  text-align: center;

  @media only screen and (max-width: 767px) {
    top: 20px;
  }
`

const CartCount = styled.h5`
  color: white;
`

export default Header
