import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import CartProducts from '../Components/CartProducts'
import CurrencyFormat from 'react-currency-format'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { getCartProducts_Failure, getCartProducts_Request, getCartProducts_Success } from '../Redux/User/CartSlicer'

function Cart_Items() {


    const dispatch = useDispatch()
    const { current_user } = useSelector((state) => state.user)
    const { cartProducts } = useSelector((state) => state.cart)
    const { products } = useSelector((state) => state.product)
    const [finalcartProducts, setFinalcartProducts] = useState()
    const [totalPrice, setTotalPrice] = useState()


    useEffect(() => {
        const getCartProducts = async () => {
            try {

                dispatch(getCartProducts_Request())
                await axios.get('/user/getcartproduct').then((res) => dispatch(getCartProducts_Success(res.data)))
            } catch (error) {
                dispatch(getCartProducts_Failure())
            }
        }
        getCartProducts()
    }, [])


    useEffect(() => {
        if (cartProducts && products) {
            let cat = []
            let data1 = []
            let priceArray = []
            cartProducts.map((item) => {
                const datat = products.filter((product) => product._id == item.productId)

                // to add quantity
                datat.map((items) => {
                    data1.push({ ...items, quantity: item.quantity })
                })

                cat.push(...datat)

            })

            setFinalcartProducts(data1);

            //totalprice
            data1.map((item) => {
                priceArray.push(item.price * item.quantity)
            })

            setTotalPrice(priceArray.reduce((a, b) => a + b, 0))

        }
    }, [cartProducts, products])




    return (

        <Container>
            <CardContainer>
                {finalcartProducts && finalcartProducts.map((item) => <CartProducts key={item._id} cartdata={item} />)}
            </CardContainer>
            <PriceListContainer  >
                <PriceList>

                    <ProductCount>Total Numer: {finalcartProducts ? finalcartProducts.length : 0}</ProductCount>
                    <CurrencyFormat value={totalPrice ? totalPrice : 0} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <h4>Total Price: {value}</h4>} />
                </PriceList>
            </PriceListContainer>

        </Container>


    )
}








export default Cart_Items

const Container = styled.div`
display: flex;
padding: 20px;
 
`
const CardContainer = styled.div`
 flex: 7;

`
const PriceListContainer = styled.div`
flex: 4;



`
const PriceList = styled.div`

height: 100px;
padding: 20px;
background-color: #ffd814;
width: 50%;
margin: auto;
border-radius: 10px;
position: sticky;
top: 100px;


`

const ProductCount = styled.h4`
`