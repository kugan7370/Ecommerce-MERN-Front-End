import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CartProducts from '../Components/CartProducts'
import CurrencyFormat from 'react-currency-format'
function Cart_Items() {
    const { current_user } = useSelector((state) => state.user)
    const { loading, products, error } = useSelector((state) => state.product)
    const [total_price, settotal_price] = useState()
    useEffect(() => {
        try {
            if (current_user && products) {
                let product_price = []
                current_user.user.product_id.map((p_id) => {
                    const price_data = products.filter((product) => product._id === p_id).map((product) => (product.price))
                    product_price.push(...price_data)
                })
                console.log(product_price.reduce((first, secound) => first + secound, 0));
                settotal_price(product_price.reduce((first, secound) => first + secound, 0));
            }
        } catch (error) {

        }
    }, [current_user])

    return (

        <Container>
            <CardContainer>
                {current_user && current_user.user.product_id.map((cart_id) => <CartProducts key={cart_id} cart_id={cart_id} />)}
            </CardContainer>
            <PriceListContainer  >
                <PriceList>

                    <ProductCount>Number Of Product: {current_user ? current_user.user.product_id.length : 0}</ProductCount>
                    <CurrencyFormat value={total_price ? total_price : 0} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <h4>Total Price: {value}</h4>} />
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