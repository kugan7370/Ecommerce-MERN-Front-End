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
import { getCartProducts_Failure, getCartProducts_Request, getCartProducts_Success } from '../Redux/User/CartSlicer'

function CartProducts({ cartdata }) {
  const [statechange, setstatechange] = useState(false)
  // const [stateAdd, setstateAdd] = useState(false)
  // const [stateRemove, setstateRemove] = useState(false)
  const [quantityCount, setQuantityCount] = useState(cartdata.quantity)
  const dispatch = useDispatch()


  const RemoveCart = async (prouduct_id) => {
    try {
      await axios
        .delete(`/user/removebasket/${prouduct_id}`
         
        ).then(()=>setstatechange(!statechange))
       
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    const getCartProducts = async () => {
      try {
        dispatch(getCartProducts_Request())
        await axios
          .get('/user/getcartproduct')
          .then((res) => dispatch(getCartProducts_Success(res.data)))
      } catch (error) {
        dispatch(getCartProducts_Failure())
      }
    }
    getCartProducts()
  }, [statechange])
  


  const handleQuantity = async(type,productId) => {
    if (type == 'remove') {
      quantityCount > 1 && setQuantityCount(quantityCount - 1)
      try {
        quantityCount > 1&& await axios
          .put(`/user/addbasket/${productId}`, {
            quantityCount:quantityCount - 1,
          }).then(()=>setstatechange(!statechange))
         
      } catch (error) {
        console.log(error)
      }
    } if(type == 'add') {
      setQuantityCount(quantityCount + 1)
      try {
        await axios
          .put(`/user/addbasket/${productId}`, {
            quantityCount:quantityCount + 1,
          }).then(()=>setstatechange(!statechange))
         
      } catch (error) {
        console.log(error)
      }
    }
  }




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

              <button  onClick={()=>RemoveCart(cartdata._id)} >remove</button>

              <CountContainer>
                <HiMinusCircle onClick={ ()=>handleQuantity("remove",cartdata._id)} className="minusicons" color="#ffd814" />

                <span>{quantityCount}</span>

                <HiPlusCircle onClick={()=>handleQuantity("add",cartdata._id)} className="plus_icons" color="#ffd814" />
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
