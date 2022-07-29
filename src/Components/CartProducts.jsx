import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {
  user_getbasket,
  user_multi_addbasket,
  user_removebasket,
} from '../Redux/User/UserSlicer'
import { HiPlusCircle, HiMinusCircle } from 'react-icons/hi'

function CartProducts({ cartdata }) {
  // const { current_user } = useSelector((state) => state.user)
  // const { loading, products, error } = useSelector((state) => state.product)
  // const [product_list, setproduct_list] = useState([])
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   if (products) {
  //     setproduct_list(products.filter((product) => product._id == cart_id))
  //   }
  // }, [cart_id])

  // const removeItems = async (item_id) => {}

  // const addMultiProduct = async (item_id) => {}

  return (
    <>
      {cartdata && (
        <CardItem>
          <ImageContainer>
            <img src={cartdata.image} alt="" />
          </ImageContainer>
          <ItemDetails>
            <h4>{cartdata.desc}</h4>
            <h5>{`$ ${cartdata.price}`}</h5>
            <ButtonContainer>
              <button>remove</button>

              <CountContainer>
                <HiMinusCircle className="minusicons" color="#ffd814" />

                <span>{cartdata.quantity}</span>

                <HiPlusCircle className="plus_icons" color="#ffd814" />
              </CountContainer>
            </ButtonContainer>
            <PriceContainer>
              <TotalPrice>{`$ ${
                cartdata.quantity * cartdata.price
              }`}</TotalPrice>
            </PriceContainer>
          </ItemDetails>
        </CardItem>
      )}
    </>
  )
}

export default CartProducts

const CardItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid gray;
  display: flex;
  background-color: white;
`
const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  object-fit: cover;
  padding: 10px;

  img {
    height: 100%;
    width: 100%;
  }
`
const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;

  h4,
  h5,
  button {
    margin-top: 10px;
  }
  button {
    width: 20%;
    margin-right: auto;
    border: 0;
    background-color: #ffa41c;
    border-radius: 20px;
    padding: 10px;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CountContainer = styled.div`
  display: flex;
  align-items: center;

  .minusicons {
    margin-right: 20px;
  }
  .plus_icons {
    margin-left: 20px;
  }
`
const PriceContainer = styled.div`
  display: flex;
  align-self: flex-end;
  margin-right: 10px;
`
const TotalPrice = styled.h6``
