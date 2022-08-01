import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Rating } from '@mui/material'
import {
  AddBoxOutlined,
  AddCircleOutline,
  RemoveCircleOutline,
} from '@material-ui/icons'

import axios from 'axios'
import {
  addCartProducts,
  getCartProducts_Failure,
  getCartProducts_Request,
  getCartProducts_Success,
} from '../Redux/User/CartSlicer'
import Header from '../Components/Header'

function ProductDetails() {
  const dispatch = useDispatch()

  const { id } = useParams()
  const { loading, products, error } = useSelector((state) => state.product)
  const [productDetails, setproductDetails] = useState()
  const [quantityCount, setQuantityCount] = useState(1)
  const [statechange, setstatechange] = useState(false)


  console.log(productDetails)

  useEffect(() => {
    if (id && products) {
      let product = []
      products
        .filter((product) => product._id == id)
        .map((data) => setproductDetails({ ...data }))
    }
  }, [id, products])

  const handleQuantity = (type) => {
    if (type == 'remove') {
      quantityCount > 1 && setQuantityCount(quantityCount - 1)
    } else {
      setQuantityCount(quantityCount + 1)
    }
  }

  const AddCard = async () => {
    try {
      await axios
        .put(`/user/addbasket/${productDetails._id}`, {
          quantityCount,
        }).then(()=>setstatechange(!statechange))
       
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
  },[statechange])

  return (
    <>
      {productDetails && (
        <Container key={productDetails._id}>
          <ProductLeft>
            <Image src={productDetails.image} />
          </ProductLeft>
          <ProductRight>
            <ProductName>{productDetails.name}</ProductName>
            <ProductDescripstion>{productDetails.desc}</ProductDescripstion>
            <ProductRating>
              <Rating
                name="half-rating-read"
                defaultValue={productDetails.rating}
                precision={0.5}
                readOnly
              />
            </ProductRating>
            <ProductPrice>$ {productDetails.price}</ProductPrice>
            <CartContainer>
              <IconContainer>
                <Icon onClick={() => handleQuantity('remove')}>
                  <RemoveCircleOutline />
                </Icon>
                <Icon>{quantityCount}</Icon>
                <Icon onClick={() => handleQuantity('add')}>
                  <AddCircleOutline />
                </Icon>
              </IconContainer>
              <AddCardButton onClick={AddCard}>
                <h4>Add Card</h4>
              </AddCardButton>
            </CartContainer>
          </ProductRight>
        </Container>
      )}
    </>
  )
}

const Container = styled.div`
  display: flex;
  padding: 100px;
`
const ProductRight = styled.div`
  flex: 1;
  padding: 50px;
`
const ProductLeft = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  padding: 50px;
`

const Image = styled.img`
  height: 80vh;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`
const ProductName = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0px;
`
const ProductDescripstion = styled.h6`
  font-size: 15px;
  font-weight: 300;
  margin: 10px 0px;
`
const ProductRating = styled.div`
  margin: 10px 0px;
`
const ProductPrice = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0px;
`
const CartContainer = styled.div`
  margin: 30px 0px;
`
const IconContainer = styled.div`
  display: flex;
`

const Icon = styled.div`
  margin-right: 20px;
`
const AddCardButton = styled.div`
  background-color: #ffd814;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 40px;
  margin-top: 40px;
  border-radius: 5px;

  &:hover {
    background-color: #ffa41c;
  }
`

export default ProductDetails
