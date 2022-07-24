import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { user_getbasket, user_removebasket } from '../Redux/User/UserSlicer'
import { HiPlusCircle, HiMinusCircle } from 'react-icons/hi'
function CartProducts({ cart_id }) {
  const { loading, products, error } = useSelector((state) => state.product)
  const [product_list, setproduct_list] = useState()

  const dispatch = useDispatch()

  useEffect(() => {
    if (products) {
      setproduct_list(products.filter((product) => product._id == cart_id))
    }
  }, [cart_id])

  //   useEffect(() => {
  //     dispatch(user_getbasket())
  //   }, [cart_id])

  const removeItems = async (item_id) => {
    try {
      await axios
        .put(`/user/removebasket/${item_id}`)
        .then(() => dispatch(user_removebasket(item_id)))
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      {product_list && (
        <CardItem>
          <ImageContainer>
            <img src={product_list[0].image} alt="" />
          </ImageContainer>
          <ItemDetails>
            <h4>{product_list[0].desc}</h4>
            <h5>{`$ ${product_list[0].price}`}</h5>

            <button onClick={() => removeItems(product_list[0]._id)}>
              remove
            </button>
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
